import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Local file path as a fallback "database"
const dbPath = path.join(process.cwd(), 'src/app/data/comments.json');

// Read data
const readData = () => {
    try {
        const fileContent = fs.readFileSync(dbPath, 'utf8');
        return JSON.parse(fileContent);
    } catch (e) {
        return [];
    }
};

// Write data
const writeData = (data: any) => {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(data, null, 4));
        return true;
    } catch (e) {
        return false;
    }
};

export async function GET() {
    const comments = readData();
    // Sort by recent date
    const sorted = [...comments].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return NextResponse.json(sorted);
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const comments = readData();
        
        const newComment = {
            id: Date.now(),
            name: body.name,
            message: body.message,
            date: new Date().toISOString(),
            rating: body.rating
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
