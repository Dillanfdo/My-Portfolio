import type { SimpleIcon } from 'simple-icons';
import type { Technology } from '@/data/technologies';

interface TechLogoProps {
  tech: Technology;
  className?: string;
}

function LogoGraphic({ tech, className }: TechLogoProps) {
  if (tech.src) {
    return (
      <img
        src={tech.src}
        alt=""
        className={`${className} object-contain`}
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
    );
  }

  const icon = tech.icon as SimpleIcon;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill={`#${tech.color ?? icon.hex}`}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

export default function TechLogo({ tech }: TechLogoProps) {
  const iconSize = tech.lightBackground ? 'w-5 h-5 md:w-6 md:h-6' : 'w-7 h-7 md:w-8 md:h-8';

  if (tech.lightBackground) {
    return (
      <div
        className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
        title={tech.name}
      >
        <LogoGraphic tech={tech} className={iconSize} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11" title={tech.name}>
      <LogoGraphic tech={tech} className={iconSize} />
    </div>
  );
}
