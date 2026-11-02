import Nav from "@/components/Nav";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/content";

const tiers = [
  { name: "Free", text: "Groq or Gemini free tier. Open to everyone, daily cap, sample data only." },
  { name: "Premium (OpenAI)", text: "Access code on request, for serious evaluations. Limited messages." },
  { name: "Bring your own key", text: "Use your own API key. It stays in your browser and is never stored." },
];

export default function Demos() {
  const llm = projects.filter((p) => p.kind === "cloud");
  const ml = projects.filter((p) => p.kind === "ml");
  return (
    <>
      <Nav />
      <main>
        <Section kicker="Live demos" title="LLM applications">
          <p className="mb-8 max-w-2xl text-zinc-400">
            Each demo is built around one business problem. Pick a model option, try it with the sample data and judge the
            output yourself. Please don&apos;t enter sensitive data.
          </p>
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {tiers.map((t) => (
              <div key={t.name} className="rounded-xl border border-white/10 p-4">
                <h3 className="mb-1 text-sm font-medium text-white">{t.name}</h3>
                <p className="text-sm text-zinc-400">{t.text}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {llm.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </Section>

        <Section kicker="Live demos" title="Machine learning & MLOps">
          <p className="mb-8 max-w-2xl text-zinc-400">
            Small trained models served live, with the experiment tracking and monitoring behind them. Source and write-ups
            are on GitHub.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ml.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
          <p className="mt-10 text-sm text-zinc-500">
            Local / fine-tuned LLM projects run on my own hardware. Watch their recorded demos in the work section, or book a
            call for a live screen-share.
          </p>
        </Section>
      </main>
    </>
  );
}
