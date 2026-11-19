import LegalPage from "../components/LegalPage";

export const metadata = {
  title: "Privacy Policy | PigeonsPower",
  description:
    "How PigeonsPower collects, uses and protects the personal information you share through this website and our enquiry form.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/privacy-policy",
    siteName: "PigeonsPower",
    title: "Privacy Policy | PigeonsPower",
    description:
      "How PigeonsPower collects, uses and protects the personal information you share through this website and our enquiry form.",
  },
};

const sections = [
  {
    heading: "Information we collect",
    paragraphs: [
      "When you send an enquiry through this website, we collect the details you provide so we can respond to you. This may include:",
    ],
    items: [
      "Your name and company name",
      "Your email address and phone number",
      "The service you are enquiring about",
      "The project details you include in your message",
    ],
  },
  {
    heading: "How we use your information",
    paragraphs: [
      "We use the information you provide only to respond to your enquiry, prepare quotes or proposals, deliver our engineering and consultancy services, and keep records of our work together. We do not sell, rent or trade your personal information to third parties.",
    ],
  },
  {
    heading: "How we store and protect your information",
    paragraphs: [
      "Enquiries submitted through this website are stored in our business systems and are accessible only to the PigeonsPower team members who need them to handle your request. We take reasonable steps to protect personal information from misuse, loss and unauthorised access.",
    ],
  },
  {
    heading: "Cookies and website analytics",
    paragraphs: [
      "This website may use basic cookies and analytics tools to understand how visitors use the site and to improve its content and performance. These tools do not identify you personally. You can disable cookies in your browser settings at any time.",
    ],
  },
  {
    heading: "Accessing or correcting your information",
    paragraphs: [
      "You may ask us at any time what personal information we hold about you, and ask us to correct or delete it. To make a request, contact us using the details below and we will respond within a reasonable time, in line with the Australian Privacy Principles.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this privacy policy from time to time. Any changes will be published on this page and will apply from the date they are posted.",
    ],
  },
  {
    heading: "Contact us",
    paragraphs: [
      "If you have any questions about this privacy policy or how we handle your information, please contact PigeonsPower at 1-Chindwin Place, Roxburgh Park VIC 3064, by phone on +61 419 663 260, or by email at info@pigeonspower.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="PigeonsPower respects your privacy. This policy explains what personal information we collect through this website, why we collect it, and how we look after it."
      sections={sections}
    />
  );
}
