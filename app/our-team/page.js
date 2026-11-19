import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import team from "../data/team";

export const metadata = {
  title: "Our Team | PigeonsPower",
  description:
    "Meet the PigeonsPower team — the engineers, designers and estimators behind our electrical network design, public lighting and project delivery work across Australia.",
  alternates: {
    canonical: "/our-team",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/our-team",
    siteName: "PigeonsPower",
    title: "Our Team | PigeonsPower",
    description:
      "Meet the PigeonsPower team — the engineers, designers and estimators behind our electrical network design, public lighting and project delivery work across Australia.",
    images: [
      {
        url: "/electrical%20tower.jpg",
        alt: "Electrical transmission tower at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | PigeonsPower",
    description:
      "Meet the PigeonsPower team — the engineers, designers and estimators behind our electrical network design, public lighting and project delivery work across Australia.",
    images: ["/electrical%20tower.jpg"],
  },
};

function initialsFor(name) {
  const words = name.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].slice(0, 1).toUpperCase();
  }
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

function TeamCard({ member }) {
  return (
    <article className="group self-start overflow-hidden rounded-brand-lg border border-brand-border bg-brand-surface shadow-brand-sm transition-all duration-300 hover:border-brand-secondary hover:shadow-brand">
      {/* Photo / initials avatar */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-brand-gradient">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            width={600}
            height={600}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-7xl font-black tracking-tight text-brand-surface/90">
            {initialsFor(member.name)}
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold leading-snug text-brand-heading">
          {member.name}
        </h3>

        <p className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-brand-secondary">
          {member.role}
        </p>

        <p className="mt-4 text-sm leading-7 text-brand-text">{member.bio}</p>

        {(member.email || member.linkedin) && (
          <div className="mt-5 flex items-center gap-3 border-t border-brand-border pt-5">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                aria-label={`Email ${member.name}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-background text-brand-secondary transition-colors duration-300 hover:bg-brand-secondary hover:text-brand-surface"
              >
                <FaEnvelope />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-background text-brand-secondary transition-colors duration-300 hover:bg-brand-secondary hover:text-brand-surface"
              >
                <FaLinkedin />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function OurTeamPage() {
  return (
    <>
      {/* =====================================================
          HERO BAND
      ===================================================== */}
      <section className="bg-brand-primary">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-brand-accent">
            Our Team
          </span>

          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-brand-surface sm:text-5xl">
            Meet the People Behind PigeonsPower
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-brand-surface/70">
            Every design, drawing and estimate that leaves our office is
            checked by the people on this page. We are a small, experienced
            team of engineers, designers and estimators who believe good
            engineering is built on quality, safety and trust — and that
            clients should always know exactly who is doing their work.
          </p>
        </div>
      </section>

      {/* =====================================================
          MEMBER GRID
      ===================================================== */}
      <section className="bg-brand-background">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA BAND
      ===================================================== */}
      <section className="bg-brand-primary">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-brand-accent">
              Have a Project?
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-brand-surface sm:text-4xl">
              Let&apos;s talk about your next electrical project.
            </h2>

            <p className="mt-4 leading-7 text-brand-surface/70">
              From NSP network design to development connections, our team is
              ready to discuss your project requirements.
            </p>
          </div>

          <div className="mt-8 lg:mt-0">
            <Link
              href="/#contactus"
              className="inline-flex items-center gap-2 rounded-brand bg-brand-accent px-7 py-3.5 text-sm font-bold text-brand-primary shadow-brand-button transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-accent-dark hover:shadow-brand"
            >
              Discuss Your Project
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
