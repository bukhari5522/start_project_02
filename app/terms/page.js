import LegalPage from "../components/LegalPage";

export const metadata = {
  title: "Terms of Use | PigeonsPower",
  description:
    "The terms that apply when you use the PigeonsPower website, including the general nature of the information published on it.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/terms",
    siteName: "PigeonsPower",
    title: "Terms of Use | PigeonsPower",
    description:
      "The terms that apply when you use the PigeonsPower website, including the general nature of the information published on it.",
  },
};

const sections = [
  {
    heading: "Using this website",
    paragraphs: [
      "By using this website, you agree to these terms of use. The website is provided by PigeonsPower, an electrical engineering consultancy based in Roxburgh Park, Victoria, Australia. If you do not agree with these terms, please do not use this website.",
    ],
  },
  {
    heading: "General information only",
    paragraphs: [
      "The content on this website is general information about our services and capabilities. It is not engineering advice for any specific project. Designs, assessments and recommendations for a project are only provided under a written engagement with PigeonsPower, based on that project's requirements and the applicable standards and authority approvals.",
    ],
  },
  {
    heading: "Enquiries and quotes",
    paragraphs: [
      "Submitting an enquiry through this website does not create a contract or an engagement. Any quote, proposal or estimate we provide is subject to the terms set out in that document and to a written agreement being in place before work begins.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "The content of this website — including text, graphics, logos and layout — belongs to PigeonsPower or is used with permission. You may view and print pages for your own information, but you must not copy, reproduce or use our content or branding for commercial purposes without our written consent.",
    ],
  },
  {
    heading: "Liability",
    paragraphs: [
      "We take care to keep the information on this website accurate and up to date, but we do not guarantee that it is complete or error-free. To the extent permitted by law, PigeonsPower is not liable for any loss or damage arising from reliance on information published on this website. Nothing in these terms limits any rights you have under Australian Consumer Law that cannot lawfully be excluded.",
    ],
  },
  {
    heading: "Links to other websites",
    paragraphs: [
      "This website may refer to other organisations, utilities and authorities. Those references are for convenience only; PigeonsPower does not control or endorse third-party websites and is not responsible for their content.",
    ],
  },
  {
    heading: "Changes to these terms",
    paragraphs: [
      "We may update these terms from time to time. Any changes will be published on this page and will take effect from the date they are posted.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of Victoria, Australia. If you have any questions about these terms, please contact PigeonsPower at 1-Chindwin Place, Roxburgh Park VIC 3064, by phone on +61 419 663 260, or by email at info@pigeonspower.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Use"
      intro="These terms set out the rules for using the PigeonsPower website. They are written to be clear and fair, and they apply to every visitor to this site."
      sections={sections}
    />
  );
}
