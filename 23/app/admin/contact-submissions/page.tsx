'use client';

import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

interface Submission {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  message: string;
  subject?: string;
  phone?: string;
  status: string;
}

export default function ContactSubmissions() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [actionStatus, setActionStatus] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchSubmissions() {
      try {
        // The cookie will be sent automatically with the request
        const response = await fetch('/api/admin/contact-submissions');
        
        if (!response.ok) {
          if (response.status === 401) {
            // Redirect to login if unauthorized
            router.push('/admin/login');
            return;
          }
          throw new Error('Failed to fetch submissions');
        }
        
        const data = await response.json();
        setSubmissions(data.submissions || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchSubmissions();
  }, [router]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      setActionStatus(null);
      const response = await fetch('/api/admin/contact-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          action: 'update',
          status: newStatus
        })
      });

      if (!response.ok) {
        if (response.status === 401) {
          // Redirect to login if unauthorized
          router.push('/admin/login');
          return;
        }
        throw new Error('Failed to update status');
      }

      const result = await response.json();
      
      // Update the submissions list
      setSubmissions(submissions.map(sub => 
        sub.id === id ? {...sub, status: newStatus} : sub
      ));
      
      // Update selected submission if it's the one being modified
      if (selectedSubmission?.id === id) {
        setSelectedSubmission({...selectedSubmission, status: newStatus});
      }
      
      setActionStatus({
        message: 'Status updated successfully',
        type: 'success'
      });
    } catch (err) {
      setActionStatus({
        message: err instanceof Error ? err.message : 'Failed to update status',
        type: 'error'
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) {
      return;
    }
    
    try {
      setActionStatus(null);
      const response = await fetch('/api/admin/contact-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          action: 'delete'
        })
      });

      if (!response.ok) {
        if (response.status === 401) {
          // Redirect to login if unauthorized
          router.push('/admin/login');
          return;
        }
        throw new Error('Failed to delete submission');
      }

      // Remove from submissions list
      setSubmissions(submissions.filter(sub => sub.id !== id));
      
      // Clear selected submission if it's the one being deleted
      if (selectedSubmission?.id === id) {
        setSelectedSubmission(null);
      }
      
      setActionStatus({
        message: 'Submission deleted successfully',
        type: 'success'
      });
    } catch (err) {
      setActionStatus({
        message: err instanceof Error ? err.message : 'Failed to delete submission',
        type: 'error'
      });
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/admin/logout', {
        method: 'POST',
      });
      
      if (response.ok) {
        // Redirect to login page after successful logout
        window.location.href = '/admin/login';
      } else {
        console.error('Failed to logout');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  if (loading) return <div className={styles.loading}>Loading submissions...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Contact Form Submissions</h1>
        <button 
          onClick={handleLogout} 
          className={styles.logoutButton}
        >
          Logout
        </button>
      </div>
      
      {actionStatus && (
        <div className={actionStatus.type === 'success' ? styles.success : styles.error}>
          {actionStatus.message}
        </div>
      )}

      <div className={styles.grid}>
        <div className={styles.submissionsList}>
          <h2>All Submissions ({submissions.length})</h2>
          {submissions.length === 0 ? (
            <p>No submissions yet.</p>
          ) : (
            <ul className={styles.list}>
              {submissions.map((submission) => (
                <li 
                  key={submission.id} 
                  className={`${styles.listItem} ${selectedSubmission?.id === submission.id ? styles.selected : ''}`}
                  onClick={() => setSelectedSubmission(submission)}
                >
                  <div className={styles.submissionPreview}>
                    <strong>{submission.name}</strong>
                    <span>{formatDate(submission.timestamp)}</span>
                    <span className={getStatusClass(submission.status)}>
                      {getStatusLabel(submission.status)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.submissionDetail}>
          {selectedSubmission ? (
            <div>
              <h2>Submission Details</h2>
              <div className={styles.detailItem}>
                <strong>Date:</strong> {formatDate(selectedSubmission.timestamp)}
              </div>
              <div className={styles.detailItem}>
                <strong>Name:</strong> {selectedSubmission.name}
              </div>
              <div className={styles.detailItem}>
                <strong>Email:</strong> {selectedSubmission.email}
              </div>
              {selectedSubmission.phone && (
                <div className={styles.detailItem}>
                  <strong>Phone:</strong> {selectedSubmission.phone}
                </div>
              )}
              {selectedSubmission.subject && (
                <div className={styles.detailItem}>
                  <strong>Subject:</strong> {selectedSubmission.subject}
                </div>
              )}
              <div className={styles.detailItem}>
                <strong>Message:</strong>
                <div className={styles.message}>{selectedSubmission.message}</div>
              </div>
              <div className={styles.detailItem}>
                <strong>Status:</strong>
                <span className={getStatusClass(selectedSubmission.status)}>
                  {getStatusLabel(selectedSubmission.status)}
                </span>
              </div>
              <div className={styles.detailItem}>
                <strong>ID:</strong> <code>{selectedSubmission.id}</code>
              </div>
              
              <div className={styles.actions}>
                <h3>Actions</h3>
                <div className={styles.actionButtons}>
                  <button 
                    onClick={() => handleStatusChange(selectedSubmission.id, 'read')}
                    className={styles.actionButton}
                    disabled={selectedSubmission.status === 'read'}
                  >
                    Mark as Read
                  </button>
                  <button 
                    onClick={() => handleStatusChange(selectedSubmission.id, 'responded')}
                    className={styles.actionButton}
                    disabled={selectedSubmission.status === 'responded'}
                  >
                    Mark as Responded
                  </button>
                  <button 
                    onClick={() => handleDelete(selectedSubmission.id)}
                    className={`${styles.actionButton} ${styles.deleteButton}`}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.noSelection}>
              <p>Select a submission to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper functions for status display
function getStatusClass(status: string): string {
  switch (status) {
    case 'email_sent':
      return styles.success;
    case 'read':
      return styles.info;
    case 'responded':
      return styles.success;
    case 'new':
      return styles.warning;
    default:
      return styles.error;
  }
}

function getStatusLabel(status: string): string {
  switch (status) {
    case 'email_sent':
      return '✅ Email Sent';
    case 'read':
      return '👁️ Read';
    case 'responded':
      return '✓ Responded';
    case 'new':
      return '🔔 New';
    default:
      return status || 'Unknown';
  }
} 