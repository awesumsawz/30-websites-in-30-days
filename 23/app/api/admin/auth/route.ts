import { NextResponse } from 'next/server';
import { z } from 'zod';

// Input validation schema
const loginSchema = z.object({
  password: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    // Parse and validate input
    const body = await request.json();
    const result = loginSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input' },
        { status: 400 }
      );
    }

    const { password } = result.data;
    
    // Check if password matches the admin password
    // In a real app, you would use a secure password hashing mechanism
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    // Create a response with success message
    const response = NextResponse.json({ success: true });
    
    // Set a cookie with the auth token
    // In a real app, you would use a JWT or other secure token
    response.cookies.set({
      name: 'admin_auth_token',
      value: process.env.ADMIN_API_KEY || '',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      // Set expiration to 24 hours
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error) {
    console.error('Error in admin authentication:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 