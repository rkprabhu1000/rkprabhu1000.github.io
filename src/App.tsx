import { useEffect, useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Award, CalendarDays, GraduationCap, MapPin, Menu, Moon, Sun, X } from 'lucide-react'
import { awards, education, experience, expertise, principles, profile, stats, tools } from './data'

const nav = [
  { id: 'about', label: 'About' },
  { id: 'principles', label: 'Principles' },
  { id: 'experience', label: 'Experience' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'contact', label: 'Contact' },
]

function LinkedInIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-tight sm:text-5xl">{title}</h2>
    </Reveal>
  )
}

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch { /* storage unavailable */ }
  }, [dark])
  return [dark, () => setDark((d) => !d)] as const
}

function Nav() {
  const [dark, toggle] = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'border-b border-line bg-bg/80 backdrop-blur-lg' : 'border-b border-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-serif text-2xl italic">rk<span className="text-accent">.</span></a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm text-muted transition-colors hover:text-fg">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle colour theme" className="rounded-full p-2 text-muted transition-colors hover:bg-bg-alt hover:text-fg">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen((o) => !o)} aria-label="Open menu" className="rounded-full p-2 text-muted hover:text-fg md:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-4 py-3 md:hidden">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-muted hover:bg-bg-alt hover:text-fg">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {profile.title} at Frends
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              {profile.name}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl font-serif text-2xl italic leading-snug text-muted sm:text-3xl">{profile.headline}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-6 max-w-xl leading-relaxed text-muted">{profile.intro}</p>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5">
                <LinkedInIcon className="h-4 w-4" /> Connect on LinkedIn
              </a>
              <a href="#book" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent">
                <CalendarDays size={16} /> Book a time
              </a>
              <span className="inline-flex items-center gap-1.5 px-2 text-sm text-muted"><MapPin size={15} /> {profile.location}</span>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="mx-auto w-full max-w-sm">
          <div className="relative">
            <div aria-hidden className="absolute -inset-3 rounded-[2rem] border border-accent/30" />
            <img src="./profile.jpg" alt={`Portrait of ${profile.fullName}`} className="relative aspect-[4/5] w-full rounded-[1.6rem] object-cover shadow-2xl shadow-black/10" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="border-y border-line bg-bg-alt">
      <div className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 md:grid-cols-3 lg:grid-cols-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05} className="border-line px-2 py-10 text-center lg:border-r lg:last:border-r-0">
            <p className="font-serif text-4xl text-accent sm:text-5xl">{s.value}</p>
            <p className="mt-2 text-xs leading-snug text-muted sm:text-sm">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <SectionHeading eyebrow="About" title="Architect, operator, team builder." />
        <div className="space-y-6 text-lg leading-relaxed text-muted">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}><p>{p}</p></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Principles() {
  return (
    <section id="principles" className="bg-fg py-24 text-bg sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent dark:text-[#a8682f]">Guiding principles</p>
          <h2 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">How I lead, and how I work.</h2>
        </Reveal>
        <ol className="grid gap-x-16 gap-y-12 md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <li className="border-t border-bg/15 pt-6">
                <span className="font-serif text-5xl text-accent dark:text-[#a8682f]">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-serif text-3xl leading-snug">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-bg/70">{p.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="bg-bg-alt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Experience" title="From engineer to architect to leader." />
        <ol className="relative border-l border-line">
          {experience.map((r, i) => (
            <li key={r.company} className="relative pb-14 pl-8 last:pb-0 sm:pl-12">
              <span aria-hidden className={`absolute -left-[6px] top-2 h-[11px] w-[11px] rounded-full border-2 ${i === 0 ? 'border-accent bg-accent' : 'border-line bg-bg-alt'}`} />
              <Reveal>
                <div className="grid gap-4 md:grid-cols-[14rem_1fr] md:gap-10">
                  <div>
                    <p className="text-sm font-medium text-accent">{r.period}</p>
                    <p className="mt-1 text-sm text-muted">{r.location}</p>
                  </div>
                  <div className="rounded-2xl border border-line bg-card p-6 transition-colors hover:border-accent/40 sm:p-8">
                    <h3 className="font-serif text-3xl">{r.company}</h3>
                    <p className="mt-1 font-medium">{r.title}</p>
                    {r.earlier && <p className="mt-1 text-sm text-muted">Previously: {r.earlier}</p>}
                    <ul className="mt-5 space-y-3">
                      {r.points.map((p) => (
                        <li key={p} className="flex gap-3 text-muted">
                          <span aria-hidden className="mt-2.5 h-1 w-3 shrink-0 bg-accent/60" />
                          <span className="leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {r.skills.map((s) => (
                        <span key={s} className="rounded-full bg-accent-soft px-3 py-1 text-xs text-fg/80">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Expertise() {
  return (
    <section id="expertise" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading eyebrow="Expertise" title="Where I add the most value." />
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((e, i) => (
          <Reveal key={e.title} delay={(i % 3) * 0.06} className="bg-card p-8">
            <p className="font-serif text-lg text-accent">{String(i + 1).padStart(2, '0')}</p>
            <h3 className="mt-4 text-lg font-semibold">{e.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{e.body}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12">
        <p className="mb-4 text-sm text-muted">Platforms & tools</p>
        <div className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <span key={t} className="rounded-full border border-line px-4 py-2 text-sm">{t}</span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function Recognition() {
  return (
    <section id="recognition" className="bg-bg-alt py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-[3fr_2fr]">
        <div>
          <SectionHeading eyebrow="Recognition" title="Awards along the way." />
          <ul className="divide-y divide-line border-y border-line">
            {awards.map((a, i) => (
              <Reveal key={a.year + a.title} delay={i * 0.04}>
                <li className="grid grid-cols-[4rem_1fr] items-baseline gap-4 py-5">
                  <span className="font-serif text-2xl text-accent">{a.year}</span>
                  <div>
                    <p className="font-medium">{a.title}</p>
                    <p className="text-sm text-muted">{a.detail}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading eyebrow="Education" title="Foundations." />
          <div className="space-y-4">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 0.08}>
                <div className="rounded-2xl border border-line bg-card p-6">
                  <GraduationCap className="text-accent" size={22} />
                  <h3 className="mt-4 font-serif text-2xl">{e.school}</h3>
                  <p className="mt-1 text-muted">{e.degree}</p>
                  <p className="mt-4 flex justify-between text-sm text-muted"><span>{e.period}</span><span>{e.grade}</span></p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <div className="flex items-start gap-3 rounded-2xl border border-dashed border-line p-6 text-sm text-muted">
                <Award className="mt-0.5 shrink-0 text-accent" size={18} />
                President's Club, Titan and HEART award winner — consistently recognised for customer impact and team contribution.
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-fg px-6 py-16 text-bg sm:px-16 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent dark:text-[#a8682f]">Contact</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">Let's talk challenges, technology, business, presales or building great teams.</h2>
          <p className="relative mt-6 max-w-xl text-bg/70">Book a 30-minute call at a time that suits you — just add a short agenda so we can make the most of it.</p>
          <div className="relative mt-8 flex flex-wrap gap-3">
            <a href={profile.booking} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 dark:bg-[#a8682f]">
              <CalendarDays size={16} /> Book a 30-min call
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-bg/25 px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent">
              <LinkedInIcon className="h-4 w-4" /> Connect on LinkedIn <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-8">
        <div id="book" className="overflow-hidden rounded-[2rem] border border-line bg-white">
          <iframe
            src={profile.bookingEmbed}
            title={`Book a call with ${profile.name}`}
            loading="lazy"
            className="block h-[640px] w-full border-0"
          />
        </div>
        <p className="mt-3 text-center text-xs text-muted">
          Calendar not loading? <a href={profile.booking} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-accent">Open the booking page</a>.
        </p>
      </Reveal>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Principles />
        <Experience />
        <Expertise />
        <Recognition />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {profile.fullName}</p>
          <p>{profile.location}</p>
        </div>
      </footer>
    </>
  )
}
