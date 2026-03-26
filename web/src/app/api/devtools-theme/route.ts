import { NextResponse } from 'next/server';

import { readDevtoolsThemePreference } from '../../../lib/theme-server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  const theme = await readDevtoolsThemePreference();

  return NextResponse.json(
    { theme },
    {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    },
  );
}
