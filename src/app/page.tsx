import ContactForm from "./contact-form";

const services = [
  {
    title: "Foundation Repair",
    body: "Pier & beam and slab foundations diagnosed and stabilized for North Texas soil — residential and commercial.",
  },
  {
    title: "Commercial & Multifamily",
    body: "Tilt wall stabilization, warehouse slab leveling, and multifamily foundation work across DFW and the Texas Triangle.",
  },
  {
    title: "Concrete & Drainage",
    body: "Concrete leveling, driveways, and drainage correction that address the water problems behind foundation movement.",
  },
  {
    title: "Inspections & Due Diligence",
    body: "Engineer-involved evaluations and due-diligence walks — an honest read on whether a repair is actually needed.",
  },
];

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight text-cardinal">
            Cardinal Foundation Services
          </span>
          <a
            href="#contact"
            className="hidden rounded-md bg-cardinal px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-cardinal-dark sm:inline-block"
          >
            Free inspection
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-stone">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-cardinal">
            Engineer-Owned. Foundation-Focused.
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Foundation, concrete &amp; structural work built for North Texas soil.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            A foundation, concrete &amp; structural contractor serving Dallas–Fort
            Worth — commercial and residential. We diagnose the problem first, with
            an engineer involved, and give you a straight answer. Sometimes the
            right answer is that you don&apos;t need a repair.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-cardinal px-6 text-base font-semibold text-white transition-colors hover:bg-cardinal-dark"
            >
              Request a free inspection
            </a>
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-md border border-line bg-paper px-6 text-base font-semibold text-ink transition-colors hover:border-cardinal"
            >
              What we do
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-ink">What we do</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-lg border border-line p-6 transition-colors hover:border-cardinal"
            >
              <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 leading-7 text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-stone">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink">
              Request a free inspection
            </h2>
            <p className="mt-4 max-w-md leading-7 text-muted">
              Tell us what you&apos;re seeing and we&apos;ll get back to you within
              one business day. Serving Fort Worth, Dallas, and the greater DFW
              metroplex.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-paper p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted sm:flex-row">
          <span>
            © {new Date().getFullYear()} Cardinal Foundation Services. Serving DFW,
            Texas.
          </span>
          <span>Foundation · Concrete · Structural</span>
        </div>
      </footer>
    </>
  );
}
