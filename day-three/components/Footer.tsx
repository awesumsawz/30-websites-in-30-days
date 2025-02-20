'use client';

export function Footer() {
  return (
    <footer className="bg-card py-4">
      <div className="container mx-auto px-4 text-center text-sm text-foreground">
        © {new Date().getFullYear()} ADA Compliant Dracula-Themed Jira Clone
      </div>
    </footer>
  );
} 