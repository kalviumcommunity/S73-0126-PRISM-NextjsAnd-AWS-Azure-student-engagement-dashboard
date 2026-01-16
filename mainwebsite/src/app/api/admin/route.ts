import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    const token = authHeader?.split(' ')[1];

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Token missing' },
        { status: 401 }
      );
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    if (decoded.role !== 'ADMIN') {
      return NextResponse.json(
        { success: false, message: 'Access denied' },
        { status: 403 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Welcome Admin! You have full access.',
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid or expired token' },
      { status: 403 }
    );
  }
}
