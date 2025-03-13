'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './styles.module.css';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || '/admin/contact-submissions';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Authentication failed');
      }

      // Redirect to the original destination or default admin page
      router.push(from);
      router.refresh(); // Refresh to ensure middleware picks up the new cookie
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>Admin Login</h1>
        
        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Enter admin password"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className={styles.button}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
} 