export default function CTA() {
  return (
    <section id="kontakt" className="px-6 pt-8 pb-24 max-w-2xl mx-auto border-t border-gray-100">
      <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
        Máš nápad nebo dotaz k některému projektu?
      </h2>
      <p className="text-gray-500 text-sm leading-relaxed mb-8">
        Rád proberu spolupráci, zpětnou vazbu i bláznivé nápady na další mikroprojekt.
      </p>
      <a
        href="mailto:hynek@darbujan.com"
        className="inline-block px-8 py-4 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-700 transition-colors"
      >
        Napiš mi
      </a>
    </section>
  );
}
