export function MapIcon({ className }: { className?: string }) {
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
      <path d="M8 2v4l-2 1-2-1V2h4z" />
      <path d="M16 2v4l2 1 2-1V2h-4z" />
      <path d="M8 18v4l-2-1-2 1v-4h4z" />
      <path d="M16 18v4l2-1 2 1v-4h-4z" />
      <path d="M12 8v8M8 12h8" />
      <path d="M4 8h2v8H4zM18 8h2v8h-2zM8 4v2h8V4H8zM8 18v2h8v-2H8z" />
    </svg>
  );
}
