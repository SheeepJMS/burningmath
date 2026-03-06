export function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v2M12 20v2M4 4h2v4H4V4zm14 0h2v4h-2V4z" />
      <path d="M6 8h2a4 4 0 0 0 8 0h2" />
      <path d="M8 8v2a4 4 0 0 0 8 0V8" />
      <path d="M6 12h12v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4z" />
      <path d="M9 16h6M12 12v6" />
    </svg>
  );
}
