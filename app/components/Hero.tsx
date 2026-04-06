export default function Hero() {
  return (
    <section id="uvod" className="min-h-screen flex flex-col justify-center px-6 py-24 max-w-2xl mx-auto">
      <p className="text-sm font-mono text-gray-400 mb-6 tracking-widest uppercase">hynek dařbujan</p>

      <h1 className="text-4xl md:text-5xl font-black leading-tight mb-8 text-gray-900">
        Přes den pracuji v{" "}
        <a href="https://logio.com" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-gray-600 transition-colors">Logio</a>{" "}
        na projektu{" "}
        <a href="https://veritico.com" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted hover:text-gray-600 transition-colors">Veritico Stock</a>
        {" "}—{" "}pomáháme firmám lépe řídit zásoby a rozhodování.
        <br /><br />
        <span className="text-gray-500">Večer stavím vlastní projekty a testuju nápady v praxi.</span>
      </h1>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="#projekty"
          className="px-6 py-3 rounded-full bg-gray-900 text-white font-semibold text-sm hover:bg-gray-700 transition-colors"
        >
          Podívej se na projekty
        </a>
        <a
          href="mailto:hynek@darbujan.com"
          className="px-6 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-semibold text-sm hover:bg-gray-900 hover:text-white transition-colors"
        >
          Napiš mi
        </a>
      </div>

      <a href="#projekty" className="mt-16 text-gray-500 hover:text-gray-900 transition-colors animate-bounce self-center">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
