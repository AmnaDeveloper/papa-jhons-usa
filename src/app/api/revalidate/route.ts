import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');
  const secret = searchParams.get('secret');
  const revalidateSecret = process.env.REVALIDATE_SECRET;

  if (!revalidateSecret) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  if (secret !== revalidateSecret) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  if (path) {
    revalidatePath(path);
    return NextResponse.json({ revalidated: true, now: Date.now(), path });
  }

  return NextResponse.json({ revalidated: false, message: 'Missing path to revalidate' });
}
