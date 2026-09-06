// src/data/schema.ts

export type CenturyCode = '1500' | '1600' | '1700' | '1800' | '1900' | '2000';

export type MajorRegion =
  | 'Africa'
  | 'Asia'
  | 'Europe'
  | 'North America'
  | 'South America'
  | 'Central America'
  | 'Caribbean'
  | 'Middle East'
  | 'Oceania'
  | 'Global';

export interface HistoricalSource {
  title: string;
  url?: string;
}

export interface GeoCoordinate {
  lat: number;
  lng: number;
}

export interface PersonRecord {
  id: string;                      // Stable URL slug (e.g. 'marie-curie')
  name: string;                    // Primary recognized historical name
  birthDate: string;               // Formatted string (e.g. 'November 7, 1867' or 'c. 1540')
  deathDate: string;               // Formatted string (e.g. 'July 4, 1934' or 'Living')
  birthYear: number;               // Normalized integer for sorting and timeline positioning
  deathYear?: number;              // Normalized integer; undefined if Living
  isBirthApproximate: boolean;     // True if date is prefixed with c. / approximate
  isDeathApproximate: boolean;
  birthplace: string;              // Specific city/town/region of birth
  historicalRegion: string;        // Historical entity (e.g. 'Polish-Lithuanian Commonwealth')
  modernCountry: string;           // Normalized modern territory for map/filter grouping
  majorRegion: MajorRegion;        // Continent / macro-region
  coordinates: GeoCoordinate;      // Map anchor point
  century: CenturyCode;            // Primary century categorization
  primaryField: string;            // Primary domain (e.g. 'Science')
  secondaryFields: string[];       // Specific sub-fields (e.g. ['Physics', 'Chemistry'])
  whatTheyDid: string;             // 1-3 sentences on major work/achievements
  whyTheyMatter: string;           // Lasting historical impact and legacy
  portraitUrl?: string;            // Path to portrait or empty for fallback
  sources: HistoricalSource[];     // Academic / institutional citations
  featured?: boolean;              // Highlight on homepage
}

export interface CenturyOverview {
  code: CenturyCode;
  label: string;
  period: string;
  title: string;
  description: string;
  keyThemes: string[];
}