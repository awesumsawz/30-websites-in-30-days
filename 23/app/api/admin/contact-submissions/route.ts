import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
const { getAllContactSubmissions, getContactSubmissionById, updateContactSubmissionStatus, deleteContactSubmission } = require('../../../../lib/dynamodb');

// Helper function to check if the request is authenticated
function isAuthenticated(request: Request): boolean {
  try {
    // Get the auth token from the request cookies
    const authToken = request.headers.get('cookie')?.split(';')
      .map(cookie => cookie.trim())
      .find(cookie => cookie.startsWith('admin_auth_token='))
      ?.split('=')[1];
    
    // Check if the token is valid
    return authToken === process.env.ADMIN_API_KEY;
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
}

// GET all contact submissions
export async function GET(request: Request) {
  try {
    // Check authentication
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get all submissions
    const submissions = await getAllContactSubmissions();
    
    // Sort by timestamp (newest first)
    submissions.sort((a: any, b: any) => {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
    
    return NextResponse.json({ submissions });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST to update a submission status
export async function POST(request: Request) {
  try {
    // Check authentication
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id, action } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Missing submission ID' },
        { status: 400 }
      );
    }

    if (action === 'delete') {
      await deleteContactSubmission(id);
      return NextResponse.json({ success: true, message: 'Submission deleted' });
    } else if (action === 'update' && body.status) {
      const updatedSubmission = await updateContactSubmissionStatus(id, body.status);
      return NextResponse.json({ 
        success: true, 
        message: 'Status updated',
        submission: updatedSubmission
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid action' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error updating contact submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 