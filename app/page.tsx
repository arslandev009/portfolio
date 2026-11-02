import Nav from "@/components/Nav";
import Avatar from "@/components/Avatar";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { profile, contact, projects, services, process, strip, skills } from "@/lib/content";

const diagram = [
  "Data & features",
  "Train, fine-tune or call a model: PyTorch · OpenAI · Claude · Gemini · Local",
  "Evaluation set",
  "Serve + monitor: Docker · MLflow",
  "Measured result",
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_0%,rgba(52,211,153,0.16),transparent),radial-gradient(40%_40%_at_90%_10%,rgba(56,189,248,0.12),transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-size-[48px_48px] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_top,black,transparent_70%)]" />
          <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Avatar size={44} />
                <p className="text-sm text-zinc-400">
                  {profile.title} · {profile.location}
                </p>
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
                {profile.headA}{" "}
                <span className="bg-linear-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                  {profile.headB}
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-zinc-400">{profile.sub}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/demos"
                  className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-emerald-300"
                >
                  Try live demos
                </a>
                <a
                  href={profile.booking || "#contact"}
                  className="rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:border-white/50"
                >
                  Book a call
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur">
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-zinc-500">From data to production</p>
              <ol className="space-y-2">
                {diagram.map((s, i) => (
                  <li key={s}>
                    <div
                      className={`rounded-lg border px-4 py-2.5 text-sm ${
                        i === diagram.length - 1
                          ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-200"
                          : i === 1
                            ? "border-sky-400/40 bg-sky-400/10 text-sky-200"
                            : "border-white/10 bg-black/30 text-zinc-300"
                      }`}
                    >
                      {s}
                    </div>
                    {i < diagram.length - 1 && <div className="ml-6 h-3 w-px bg-white/15" />}
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </div>

        <div className="border-y border-white/10 bg-white/2">
          <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-2 px-6 py-5 text-sm text-zinc-400">
            {strip.map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <Section id="work" kicker="Work" title="Selected projects">
          <Projects items={projects} />
        </Section>

        <Section id="services" kicker="Services" title="What I build for you">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-white/3 p-6">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-sm font-semibold text-emerald-300">
                  {i + 1}
                </div>
                <h3 className="mb-2 font-medium text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{s.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="process" kicker="Process" title="How I work">
          <ol className="grid gap-6 sm:grid-cols-4">
            {process.map((s) => (
              <li key={s.n} className="border-t border-white/15 pt-4">
                <div className="mb-2 text-sm text-emerald-400">{s.n}</div>
                <h3 className="mb-1 font-medium text-white">{s.title}</h3>
                <p className="text-sm text-zinc-400">{s.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="about" kicker="About" title="Who you will be working with">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <Avatar size={120} />
            <div className="max-w-2xl space-y-4 text-zinc-400">
              {profile.about.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((g) => (
              <div key={g.group} className="rounded-xl border border-white/10 p-4">
                <h3 className="mb-3 text-sm font-medium text-white">{g.group}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <span key={i} className="rounded bg-white/5 px-2 py-0.5 text-xs text-zinc-400">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" kicker="Contact" title="Let's talk">
          <Contact />
        </Section>
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-zinc-500 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <div className="flex gap-5">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href={contact.youtube} target="_blank" rel="noreferrer" className="hover:text-white">YouTube</a>
            <a href={`mailto:${contact.email}`} className="hover:text-white">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}
