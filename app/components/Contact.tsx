export default function Contact() {
  return (
    <footer className="px-6 py-16 max-w-2xl mx-auto border-t border-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col gap-2 text-sm text-gray-500">
          <a href="mailto:hynek@darbujan.com" className="hover:text-gray-900 transition-colors">
            hynek@darbujan.com
          </a>
          <a href="https://github.com/darbujan" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
            github.com/darbujan
          </a>
        </div>
        <p className="text-xs text-gray-300">© {new Date().getFullYear()} Hynek Dařbujan</p>
      </div>
    </footer>
  );
}
