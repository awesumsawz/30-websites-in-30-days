'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    async function performLogout() {
      try {
        // Call the logout API
        const response = await fetch('/api/admin/logout', {
          method: 'POST',
        });
        
        if (!response.ok) {
          console.error('Failed to logout');
        }
      } catch (error) {
        console.error('Error during logout:', error);
      } finally {
        // Redirect to login page regardless of success/failure
        router.push('/admin/login');
      }
    }

    performLogout();
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: 'var(--dracula-background, #282a36)'
    }}>
      <div style={{ 
        textAlign: 'center',
        color: 'var(--dracula-foreground, #f8f8f2)',
        fontFamily: 'var(--font-pixel, monospace)'
      }}>
        <h1>Logging out...</h1>
        <p>Please wait while we log you out.</p>
      </div>
    </div>
  );
} 