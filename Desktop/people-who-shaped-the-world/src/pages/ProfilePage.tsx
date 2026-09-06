// src/pages/ProfilePage.tsx
import { useParams, Link } from 'react-router-dom';

export default function ProfilePage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <Link to="/people" className="mono-date" style={{ display: 'inline-block', marginBottom: '1rem' }}>
        ← Back to Directory
      </Link>
      <h1>Biography: {id}</h1>
      <p>Detailed biographical record and historical impact view.</p>
    </div>
  );
}
