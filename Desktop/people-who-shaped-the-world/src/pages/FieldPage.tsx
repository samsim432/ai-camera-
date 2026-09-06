// src/pages/FieldPage.tsx
import { useParams } from 'react-router-dom';

export default function FieldPage() {
  const { field } = useParams<{ field: string }>();

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <span className="mono-date">DISCIPLINE</span>
      <h1 style={{ marginTop: '0.5rem' }}>Field: {field}</h1>
      <p>Pioneers and leaders across this domain of human achievement.</p>
    </div>
  );
}