import { NextResponse } from 'next/server';
import ytdl from 'ytdl-core'; // Works for YouTube only

export async function POST(req) {
  const { url } = await req.json();

  if (!ytdl.validateURL(url)) {
    return NextResponse.json({ error: 'Invalid YouTube URL' }, { status: 400 });
  }

  const info = await ytdl.getInfo(url);
  return NextResponse.json({ info });
}
