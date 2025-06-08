export default function HomePage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-6 py-20 text-center">
      <h1 className="text-5xl font-bold">Carbosia</h1>
      <p className="text-xl text-gray-600">Il marketplace per la compensazione di CO₂</p>
      <a
        href="/projects"
        className="rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark"
      >
        Entra in Carbosia
      </a>
    </section>
  );
}
