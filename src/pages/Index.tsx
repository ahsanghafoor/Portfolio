import { Helmet } from "react-helmet-async";
import { personalInfo } from "@/data/portfolio-data";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useInteractions } from "@/hooks/useInteractions";
import CursorGlow from "@/components/portfolio/CursorGlow";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import Marquee from "@/components/portfolio/Marquee";
import Toolkit from "@/components/portfolio/Toolkit";
import About from "@/components/portfolio/About";
import Work from "@/components/portfolio/Work";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  useSmoothScroll();
  useScrollReveal();
  useInteractions();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    email: `mailto:${personalInfo.email}`,
    address: { "@type": "PostalAddress", addressLocality: personalInfo.location },
    url: "https://ahsanghafoor-portfolio.netlify.app/",
    sameAs: [personalInfo.github, personalInfo.linkedin],
  };

  return (
    <>
      <Helmet>
        <title>{personalInfo.name} — Full-Stack Software Engineer</title>
        <meta
          name="description"
          content="Full-stack software engineer in Lahore, Pakistan, building web apps, AI features, and the cloud systems behind them — React, Node, Django, RAG."
        />
        <link rel="canonical" href="https://ahsanghafoor-portfolio.netlify.app/" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div style={{ position: "relative", overflow: "hidden", background: "var(--paper)" }}>
        <CursorGlow />
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <Toolkit />
          <About />
          <Work />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
