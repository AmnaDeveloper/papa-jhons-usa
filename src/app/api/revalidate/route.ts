import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');
  const secret = searchParams.get('secret');

  if (secret !== 'papa2026') {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  if (path) {
    revalidatePath(path);
    return NextResponse.json({ revalidated: true, now: Date.now(), path });
  }
  
  return NextResponse.json({ revalidated: false, message: 'Missing path to revalidate' });
}
