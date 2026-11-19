import networks from "@/app/data/networks";

export default function WhoWeWorkWith() {
  return (
    <section className="bg-brand-surface py-20 lg:py-28" id="networks">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.18em]
              text-brand-secondary
            "
          >
            Who We Work With
          </span>

          <h2
            className="
              mt-3
              text-3xl
              font-extrabold
              text-brand-heading

              sm:text-4xl
            "
          >
            Aligned with Australia&rsquo;s leading networks.
          </h2>

          <p className="mt-5 leading-7 text-brand-muted">
            We deliver electrical design, drafting and consultancy services in
            accordance with the standards, specifications and requirements of
            Australia&rsquo;s electricity distribution networks and national
            telecommunications infrastructure.
          </p>
        </div>

        {/* =====================================================
            NETWORK GROUPS
        ===================================================== */}
        <div
          className="
            mt-14
            grid
            gap-6

            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {networks.map((group) => (
            <div
              key={group.region}
              className="
                group
                rounded-brand-lg
                border
                border-brand-border
                bg-brand-surface
                p-7

                shadow-brand-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-brand
              "
            >
              <div className="flex items-center gap-3">
                <span className="h-6 w-1 rounded-full bg-brand-accent" />

                <h3
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-brand-secondary
                  "
                >
                  {group.region}
                </h3>
              </div>

              <ul className="mt-5 space-y-3">
                {group.companies.map((company) => (
                  <li key={company} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />

                    <span className="font-bold text-brand-heading">
                      {company}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center leading-7 text-brand-muted">
          Every design is prepared to the relevant network&rsquo;s standards
          and approval requirements — so approvals move faster and
          construction runs smoothly.
        </p>
      </div>
    </section>
  );
}
