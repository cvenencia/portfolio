import { NextRequest } from 'next/server';

export async function GET({ nextUrl: { searchParams } }: NextRequest) {
  const language = searchParams.get('language');
  if (language === 'es') return new Response(process.env.SPANISH_EMAIL);
  else return new Response(process.env.FALLBACK_EMAIL);
}
