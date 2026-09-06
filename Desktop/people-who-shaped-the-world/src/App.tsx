// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DirectoryPage from './pages/DirectoryPage';
import ProfilePage from './pages/ProfilePage';
import CenturyPage from './pages/CenturyPage';
import CountryPage from './pages/CountryPage';
import FieldPage from './pages/FieldPage';
import TimelinePage from './pages/TimelinePage';
import MapPage from './pages/MapPage';
import ComparePage from './pages/ComparePage';
import RandomPage from './pages/RandomPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<DirectoryPage />} />
        <Route path="/people/:id" element={<ProfilePage />} />
        <Route path="/century/:century" element={<CenturyPage />} />
        <Route path="/country/:country" element={<CountryPage />} />
        <Route path="/field/:field" element={<FieldPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/random" element={<RandomPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}