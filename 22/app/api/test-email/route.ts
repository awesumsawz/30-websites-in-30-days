import { NextResponse } from 'next/server';
import { sendEmail } from '../../../lib/email';

export async function GET() {
  try {
    const testResult = await sendEmail({
      to: 'jason@jason-biggs.com', // sending to the same email for testing
      subject: 'Email API Test - ThinkBigg',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            🎉 Email API Test Successful!
          </h1>
          
          <div style="padding: 20px 0;">
            <p>This email confirms that your ThinkBigg application's email system is working correctly.</p>
            
            <h2 style="color: #666;">Configuration Details:</h2>
            <ul style="color: #555;">
              <li>SMTP Host: ${process.env.EMAIL_HOST}</li>
              <li>Port: ${process.env.EMAIL_PORT}</li>
              <li>Secure: ${process.env.EMAIL_SECURE}</li>
              <li>From: ${process.env.DEFAULT_FROM}</li>
            </ul>
            
            <p style="margin-top: 20px;">
              <strong>Timestamp:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
          
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; color: #666;">
              If you received this email, your email configuration is working perfectly! 🚀
            </p>
          </div>
        </div>
      `,
    });

    if (!testResult.success) {
      return NextResponse.json(
        { error: 'Failed to send test email', details: testResult.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Test email sent successfully',
      messageId: testResult.messageId,
    });
  } catch (error) {
    console.error('Error in test-email route:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error },
      { status: 500 }
    );
  }
}