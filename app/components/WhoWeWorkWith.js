import Image from "next/image";
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
            Aligned with Victoria&rsquo;s leading networks.
          </h2>

          <p className="mt-5 leading-7 text-brand-muted">
            We deliver electrical design, drafting and consultancy services in
            accordance with the standards, specifications and requirements of
            Victoria&rsquo;s electricity distribution networks and NBN Co.
          </p>
        </div>

        {/* =====================================================
            NETWORK LOGOS
            One uniform white tile per company, logo fitted inside
            so every brand reads cleanly at the same size.
        ===================================================== */}
        <div className="mt-14 space-y-10">
          {networks.map((group) => (
            <div key={group.region}>
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

              <div
                className="
                  mt-5
                  grid
                  grid-cols-2
                  gap-4

                  sm:grid-cols-3
                  lg:grid-cols-5
                "
              >
                {group.companies.map((company) => (
                  <div
                    key={company.name}
                    title={company.name}
                    className="
                      flex
                      h-28
                      items-center
                      justify-center
                      rounded-brand-lg
                      border
                      border-brand-border
                      bg-white
                      p-4

                      shadow-brand-sm

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:shadow-brand
                    "
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        fill
                        sizes="(max-width: 640px) 40vw, (max-width: 1024px) 28vw, 180px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
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
