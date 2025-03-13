import { NextResponse } from 'next/server';
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';
// Import the correct functions from our dynamodb module
const { saveContactSubmission, updateContactSubmissionStatus } = require('../../../lib/dynamodb');
const { sendEmail } = require('../../../lib/email');

// Input validation schema
const contactSchema = z.object({
  name: z.string().min(1).max(100).trim(),
  email: z.string().email().max(100).trim().toLowerCase(),
  message: z.string().min(10).max(1000).trim(),
});

// Define the type for contact form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    // Validate request method
    if (request.method !== 'POST') {
      return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
      );
    }

    // Parse and validate input
    const body = await request.json();
    const result = contactSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    // Sanitize inputs
    const sanitizedData: ContactFormData = {
      name: DOMPurify.sanitize(name),
      email: DOMPurify.sanitize(email),
      message: DOMPurify.sanitize(message),
    };

    // Always save the submission to DynamoDB first
    const submission = await saveContactSubmission(sanitizedData);
    
    // Then try to send the email
    try {
      await sendEmail(sanitizedData);
      // If email sends successfully, update the record
      await updateContactSubmissionStatus(submission.id, 'email_sent');
      
      return NextResponse.json({ 
        success: true,
        message: 'Your message has been sent successfully!',
        submissionId: submission.id 
      });
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      
      // Email failed, but we still saved the submission
      return NextResponse.json({ 
        success: true, 
        message: 'Your message was received but there was an issue sending the confirmation email. We\'ll get back to you soon.',
        submissionId: submission.id 
      });
    }
  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, // Don't expose detailed error messages
      { status: 500 }
    );
  }
} 