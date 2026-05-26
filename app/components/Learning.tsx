import Link from "next/link";

export default function Learning() {
  return (
    <section id="skoleni" className="px-6 pt-8 pb-24 max-w-2xl mx-auto border-t border-gray-100">
      <h2 className="text-2xl font-black mb-4 text-gray-900">Školení</h2>
      <p className="text-gray-500 text-sm leading-relaxed mb-10">
        Praktické mini lekce pro zkušené vývojáře, kteří nechtějí začínat od nuly, ale potřebují
        rychle pochopit jiný stack nebo nový mentální model.
      </p>
      <div className="flex flex-col gap-4">
        <Link
          href="/learning/tsx-vs-lamp"
          className="group flex items-start justify-between p-5 rounded-2xl border-2 border-gray-100 hover:border-gray-900 transition-colors"
        >
          <div>
            <p className="font-bold text-gray-900 group-hover:underline">TSX pro LAMP fullstack vývojáře</p>
            <p className="text-gray-500 text-sm mt-1">Základy TSX, React mental model a rozdíly proti jQuery / klasickému JS.</p>
          </div>
          <span className="text-xs font-mono text-gray-400 mt-1 shrink-0 ml-4">školení</span>
        </Link>
      </div>
    </section>
  );
}
