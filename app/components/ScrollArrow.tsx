export default function ScrollArrow({ to }: { to: string }) {
  return (
    <div className="flex justify-center py-2">
      <a href={`#${to}`} className="text-gray-500 hover:text-gray-900 transition-colors animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </div>
  );
}
