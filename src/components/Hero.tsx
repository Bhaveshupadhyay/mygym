import { gymData } from '../data';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
          {gymData.hero.title}
        </h1>
        <p className="text-xl text-(--muted) max-w-2xl mb-10">
          {gymData.hero.subtitle}
        </p>
        <a
          href="#contact"
          className="bg-(--accent) text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
        >
          {gymData.hero.cta}
        </a>
      </div>
    </section>
  );
}
