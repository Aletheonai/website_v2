import { useState } from 'react';

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className = 'h-10 w-auto' }: BrandLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <span className="text-xl font-bold text-[var(--brand-primary)]">ALETHEON</span>;
  }

  return (
    <img
      src="/logos/aletheon-logo.png"
      alt="Aletheon"
      className={`${className} object-contain`}
      onError={() => setFailed(true)}
    />
  );
}
