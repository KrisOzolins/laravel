export const ArrowIcon = ({
  className = "size-6 shrink-0 self-center stroke-[#FF2D20]",
  rotate = 0,
}: {
  className?: string;
  rotate?: number;
}) => (
  <svg
    className={className}
    style={{ transform: `rotate(${rotate}deg)` }}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
    />
  </svg>
);
