// src/pages/HomePage.tsx
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <h1>People Who Shaped the World</h1>
      <p style={{ maxWidth: '650px', fontSize: '1.15rem', marginTop: '1rem' }}>
        Explore 600 remarkable lives that changed science, technology, politics, culture, art, philosophy, and society from 1500 to 2026.
      </p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <Link
          to="/people"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--color-accent)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            fontWeight: 600,
          }}
        >
          Explore the People
        </Link>
        <Link
          to="/timeline"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-strong)',
            color: 'var(--text-primary)',
            borderRadius: 'var(--radius-md)',
            fontWeight: 600,
          }}
        >
          Explore Timeline
        </Link>
      </div>
    </div>
  );
}