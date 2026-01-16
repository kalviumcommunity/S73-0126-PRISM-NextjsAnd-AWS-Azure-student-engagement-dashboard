import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/api/users') || pathname.startsWith('/api/admin')) {
    const authHeader = req.headers.get('authorization');
    const token = authHeader?.split(' ')[1];

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Token missing' },
        { status: 401 }
      );
    }

    // ✅ DO NOT VERIFY JWT HERE
    // Just allow request to continue
    return NextResponse.next();
  }

  return NextResponse.next();
}
