import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'src/app/data/comments.json');
const MAX_NAME_LENGTH = 60;
const MAX_MESSAGE_LENGTH = 1000;

const readData = () => {
    try {
        const fileContent = fs.readFileSync(dbPath, 'utf8');
        return JSON.parse(fileContent);
    } catch (e) {
        return [];
    }
};

const writeData = (data: any) => {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(data, null, 4));
        return true;
    } catch (e) {
        return false;
    }
};

const cleanText = (value: unknown, maxLength: number) => {
    return String(value || '')
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, maxLength);
};

const normalizePage = (value: unknown) => {
    const page = cleanText(value, 200);
    if (!page.startsWith('/')) return '';
    if (page.includes('://')) return '';
    return page.split('?')[0].split('#')[0];
};

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const page = normalizePage(searchParams.get('page'));

    if (!page) {
        return NextResponse.json({ error: 'Missing page' }, { status: 400 });
    }

    const comments = readData().filter((comment: any) => comment.page === page);
    const sorted = [...comments].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return NextResponse.json(sorted);
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const page = normalizePage(body.page);
        const name = cleanText(body.name, MAX_NAME_LENGTH);
        const message = cleanText(body.message, MAX_MESSAGE_LENGTH);

        if (!page || !name || !message) {
            return NextResponse.json({ error: 'Name, comment, and page are required' }, { status: 400 });
        }

        const comments = readData();

        const newComment = {
            id: Date.now(),
            page,
            name,
            message,
            date: new Date().toISOString(),
        };

        const updated = [newComment, ...comments];
        const success = writeData(updated);

        if (success) {
            return NextResponse.json(newComment, { status: 201 });
        }
        return NextResponse.json({ error: 'Failed to write data' }, { status: 500 });
    } catch (e) {
        return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }
}
