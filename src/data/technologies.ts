import type { SimpleIcon } from 'simple-icons';
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siMui,
  siRedux,
  siVercel,
  siNodedotjs,
  siPostgresql,
  siGit,
} from 'simple-icons';

export interface Technology {
  name: string;
  icon?: SimpleIcon;
  /** Local SVG path for icons not in simple-icons */
  src?: string;
  /** Override brand color (without #) */
  color?: string;
  /** White circular background for dark logos on dark banner */
  lightBackground?: boolean;
}

export const technologies: Technology[] = [
  { name: 'React', icon: siReact },
  { name: 'Next.js', icon: siNextdotjs, lightBackground: true, color: '000000' },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'JavaScript', icon: siJavascript },
  { name: 'Tailwind CSS', icon: siTailwindcss },
  { name: 'Material UI', icon: siMui },
  { name: 'Redux', icon: siRedux },
  { name: 'Vercel', icon: siVercel, lightBackground: true, color: '000000' },
  { name: 'Node.js', icon: siNodedotjs },
  { name: 'PostgreSQL', icon: siPostgresql },
  { name: 'Git', icon: siGit },
];
