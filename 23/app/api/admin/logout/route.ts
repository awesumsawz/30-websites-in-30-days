import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Create a response
    const response = NextResponse.json({ success: true });
    
    // Clear the auth cookie
    response.cookies.set({
      name: 'admin_auth_token',
      value: '',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      // Setting maxAge to 0 or a negative value will delete the cookie
      maxAge: 0,
    });

    return response;
  } catch (error) {
    console.error('Error logging out:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 