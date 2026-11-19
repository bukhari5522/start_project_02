export default function LegalPage({ eyebrow, title, intro, sections }) {
  return (
    <section className="bg-brand-background">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <span className="text-sm font-bold uppercase tracking-[0.18em] text-brand-accent-dark">
          {eyebrow}
        </span>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-brand-heading sm:text-5xl">
          {title}
        </h1>

        <p className="mt-6 leading-7 text-brand-text">{intro}</p>

        <div className="mt-10 space-y-10 rounded-brand-lg border border-brand-border bg-brand-surface p-6 shadow-brand-sm sm:p-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-bold text-brand-heading">
                {section.heading}
              </h2>

              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-3 leading-7 text-brand-text"
                >
                  {paragraph}
                </p>
              ))}

              {section.items && (
                <ul className="mt-3 space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 leading-7 text-brand-text"
                    >
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm leading-6 text-brand-muted">
          PigeonsPower · 1-Chindwin Place, Roxburgh Park VIC 3064 · +61 419
          663 260 · info@pigeonspower.com
        </p>
      </div>
    </section>
  );
}
