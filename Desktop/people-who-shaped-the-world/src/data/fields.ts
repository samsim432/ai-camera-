// src/data/fields.ts

export interface FieldDefinition {
  name: string;
  slug: string;
  description: string;
}

export const FIELDS: FieldDefinition[] = [
  { name: 'Science', slug: 'science', description: 'Theoretical and observational breakthroughs in physics, astronomy, chemistry, and genetics.' },
  { name: 'Mathematics', slug: 'mathematics', description: 'Calculus, number theory, geometry, and foundational logic.' },
  { name: 'Medicine', slug: 'medicine', description: 'Anatomy, surgery, pharmacology, epidemiology, immunology, and public health.' },
  { name: 'Technology', slug: 'technology', description: 'Computing architecture, software engineering, artificial intelligence, and telecommunications.' },
  { name: 'Engineering', slug: 'engineering', description: 'Mechanical, aerospace, civil, and electrical innovation.' },
  { name: 'Politics', slug: 'politics', description: 'Statecraft, governance, diplomacy, constitutional law, and democratic reform.' },
  { name: 'Military', slug: 'military', description: 'Naval command, territorial defense, tactical innovations, and anti-colonial guerrilla resistance.' },
  { name: 'Philosophy', slug: 'philosophy', description: 'Epistemology, political ethics, existentialism, and moral theory.' },
  { name: 'Religion', slug: 'religion', description: 'Theology, spiritual reform, interfaith bridge-building, and religious philosophy.' },
  { name: 'Literature', slug: 'literature', description: 'Epic poetry, novelistic realism, playwriting, vernacular translation, and essayistic critique.' },
  { name: 'Art', slug: 'art', description: 'Painting, sculpture, ukiyo-e printmaking, architecture, and contemporary installation.' },
  { name: 'Music', slug: 'music', description: 'Classical composition, opera reform, minimalism, jazz innovation, and musical heritage.' },
  { name: 'Exploration', slug: 'exploration', description: 'Oceanic navigation, astronomical cartography, polar expeditions, and spaceflight.' },
  { name: 'Economics', slug: 'economics', description: 'Political economy, development aid, microfinance, and wealth distribution.' },
  { name: 'Human Rights', slug: 'human-rights', description: 'Abolitionism, civil rights, women\'s suffrage, anti-apartheid, and indigenous rights defense.' },
  { name: 'Environmentalism', slug: 'environmentalism', description: 'Conservation, ecology, atmospheric science, and climate justice advocacy.' }
];