import { projects, skillList } from "./appData"
import ContactSection from "./components/Contact/ContactSection"
import ExperienceSection from "./components/experience/ExperienceSection"
import Footer from "./components/Footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import ProjectSection from "./components/Projects/ProjectSection"
import Skills from "./components/Skills/Skills"
import ThemeMenu from "./components/Theme/ThemeMenu"

function App() {
  return (
    <main className="dark:bg-blue-950">
     <Navbar />
      <Hero />
      <Skills skills={skillList} />
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem] ">
        <ProjectSection projects={projects} />
        <ExperienceSection />
        <ContactSection />
      </div>
      <Footer />
      <ThemeMenu />
    </main>
  );
}

export default App;



