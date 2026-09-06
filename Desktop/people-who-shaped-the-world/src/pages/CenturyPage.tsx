// src/pages/CenturyPage.tsx
import { useParams } from 'react-router-dom';

export default function CenturyPage() {
  const { century } = useParams<{ century: string }>();

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <span className="mono-date">ERA OVERVIEW</span>
      <h1 style={{ marginTop: '0.5rem' }}>The {century}s</h1>
      <p>100 transformative figures born or active during this century.</p>
    </div>
  );
}