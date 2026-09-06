// src/pages/NotFoundPage.tsx
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
      <span className="mono-date" style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>
        404
      </span>
      <h1>Page Not Found</h1>
      <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
        The historical record or route you requested does not exist in the archive.
      </p>
      <Link
        to="/"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: 'var(--color-accent)',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          fontWeight: 600,
        }}
      >
        Return to Home
      </Link>
    </div>
  );
}