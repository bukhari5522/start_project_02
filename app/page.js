import AboutPage from "./components/About";
import ContactPage from "./components/ContactUS/ContactPage";
import Hero from "./components/Hero";
import ProjectsPage from "./components/Projects/ProjectsPage";
import ServicesPage from "./components/Services/ServicePage";
import WhoWeWorkWith from "./components/WhoWeWorkWith";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPage />
      <WhoWeWorkWith />
      <ServicesPage />
      <ProjectsPage />
      <ContactPage />
    </>
  );
}
