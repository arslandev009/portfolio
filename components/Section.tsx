export default function Section({ id, title, kicker, children }: { id?: string; title: string; kicker?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20">
      {kicker && <p className="mb-2 text-xs uppercase tracking-[0.2em] text-emerald-400">{kicker}</p>}
      <h2 className="mb-10 text-3xl font-semibold tracking-tight text-white">{title}</h2>
      {children}
    </section>
  );
}
