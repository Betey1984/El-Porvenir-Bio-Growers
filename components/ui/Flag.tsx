interface FlagProps {
  code: string;
  className?: string;
}

export default function Flag({ code, className = "w-5 h-3.5" }: FlagProps) {
  const flags: Record<string, React.ReactNode> = {
    // Colombia — yellow (½), blue (¼), red (¼)
    es: (
      <svg viewBox="0 0 20 14" className={className} aria-hidden="true">
        <rect width="20" height="7"   fill="#FCD116" />
        <rect y="7"  width="20" height="3.5" fill="#003893" />
        <rect y="10.5" width="20" height="3.5" fill="#CE1126" />
      </svg>
    ),
    // United States — simplified stripes + blue canton
    en: (
      <svg viewBox="0 0 20 14" className={className} aria-hidden="true">
        <rect width="20" height="14" fill="#B22234" />
        {[1.08, 3.23, 5.38, 7.54, 9.69, 11.85].map((y) => (
          <rect key={y} y={y} width="20" height="1.08" fill="#FFFFFF" />
        ))}
        <rect width="9" height="7.54" fill="#3C3B6E" />
        {/* Stars — simplified 3×3 grid */}
        {[1.5, 3.0, 4.5, 6.0].map((cy) =>
          [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7].map((cx) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.38" fill="#FFFFFF" />
          ))
        )}
      </svg>
    ),
    // Germany — black, red, gold (equal thirds)
    de: (
      <svg viewBox="0 0 20 14" className={className} aria-hidden="true">
        <rect width="20" height="4.67"  fill="#000000" />
        <rect y="4.67"  width="20" height="4.67"  fill="#DD0000" />
        <rect y="9.33"  width="20" height="4.67"  fill="#FFCE00" />
      </svg>
    ),
  };

  return <>{flags[code] ?? null}</>;
}
