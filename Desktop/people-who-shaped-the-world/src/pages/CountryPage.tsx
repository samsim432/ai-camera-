// src/pages/CountryPage.tsx
import { useParams } from 'react-router-dom';

export default function CountryPage() {
  const { country } = useParams<{ country: string }>();

  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <span className="mono-date">REGIONAL ARCHIVE</span>
      <h1 style={{ marginTop: '0.5rem' }}>Figures from {country}</h1>
      <p>Historical figures associated with this nation or historical civilization.</p>
    </div>
  );
}