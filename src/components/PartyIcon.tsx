import type { FC } from 'react';

interface PartyIconProps {
  partyId: string;
  className?: string;
}

const PartyIcon: FC<PartyIconProps> = ({ partyId, className = "w-6 h-6" }) => {
  const id = partyId.toLowerCase();

  // DMK - Rising Sun
  if (id === 'dmk') {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M5 85 L95 85 L90 75 L70 55 L50 75 L30 55 L10 75 Z" fill="#000" />
        <circle cx="50" cy="55" r="22" fill="#ff0000" stroke="#ffcc00" strokeWidth="2" />
        {[0, 25, 50, 75, 100, 125, 150, 180, 210, 235, 260, 285, 310, 335].map(deg => (
          <rect key={deg} x="49" y="10" width="2" height="20" fill="#ff0000" transform={`rotate(${deg}, 50, 55)`} />
        ))}
      </svg>
    );
  }

  // AIADMK - Two Leaves
  if (id === 'aiadmk') {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        {/* Left Leaf */}
        <path d="M50 95 C30 80 5 60 10 35 C15 15 45 25 50 45" fill="#00923f" stroke="#fff" strokeWidth="1" />
        {/* Right Leaf */}
        <path d="M50 95 C70 80 95 60 90 35 C85 15 55 25 50 45" fill="#00923f" stroke="#fff" strokeWidth="1" />
        {/* Stem */}
        <path d="M50 95 L50 45" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        {/* Veins */}
        <path d="M25 55 L45 50 M75 55 L55 50" stroke="#fff" strokeWidth="1" opacity="0.5" />
      </svg>
    );
  }

  // TVK - Detailed Flag Motif
  if (id === 'tvk' || id === 'vijay') {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect width="100" height="100" rx="10" fill="#8B0000" />
        <rect x="0" y="30" width="100" height="40" fill="#FFD700" />
        {/* Elephant Left */}
        <path d="M20 45 Q15 45 12 50 L12 65 L16 65 L16 60 L24 60 L24 65 L28 65 L28 50 Q25 45 20 45" fill="#8B0000" />
        {/* Elephant Right */}
        <path d="M80 45 Q85 45 88 50 L88 65 L84 65 L84 60 L76 60 L76 65 L72 65 L72 50 Q75 45 80 45" fill="#8B0000" />
        {/* Center Flower/Star */}
        <circle cx="50" cy="50" r="10" fill="#8B0000" />
        <path d="M50 42 L53 48 L59 50 L53 52 L50 58 L47 52 L41 50 L47 48 Z" fill="#FFD700" />
      </svg>
    );
  }

  // BJP - Lotus
  if (id === 'bjp') {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M50 80 C60 75 90 70 90 45 C90 25 70 20 50 40 C30 20 10 25 10 45 C10 70 40 75 50 80" fill="#FF9933" stroke="#000" strokeWidth="1" />
        <path d="M50 80 C55 60 75 50 75 30 C75 15 55 20 50 40 C45 20 25 15 25 30 C25 50 45 60 50 80" fill="#FF9933" stroke="#000" strokeWidth="1" opacity="0.9" />
        <path d="M50 80 L50 35" fill="none" stroke="#000" strokeWidth="2" />
        <path d="M45 80 L55 80 L52 95 L48 95 Z" fill="#000" />
      </svg>
    );
  }

  // NTK - Gavel/Sugarcane
  if (id === 'ntk' || id === 'seeman') {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect x="46" y="20" width="8" height="60" rx="4" fill="#008000" />
        <rect x="25" y="40" width="50" height="12" rx="4" fill="#008000" />
        <path d="M35 25 L50 12 L65 25 Z" fill="#FFD700" />
        <path d="M25 65 Q50 85 75 65" stroke="#008000" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
};

export default PartyIcon;
