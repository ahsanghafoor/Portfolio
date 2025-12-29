import { Helmet } from 'react-helmet-async';
import { personalInfo } from '@/data/portfolio-data';
import CustomCursor from '@/components/CustomCursor';
import FloatingParticles from '@/components/FloatingParticles';
import ThreeDBackground from '@/components/ThreeDBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{personalInfo.name} | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content={`${personalInfo.name} - ${personalInfo.summary}`}
        />
        <meta name="keywords" content="Full-Stack Developer, MERN Stack, React, Node.js, AI, AWS, Software Engineer" />
        <meta property="og:title" content={`${personalInfo.name} | Full-Stack Developer`} />
        <meta property="og:description" content={personalInfo.tagline} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Interactive Background Elements */}
        <ThreeDBackground />
        <FloatingParticles />
        <CustomCursor />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
