import { useContext } from "react"
import { projects, skillList } from "./appData"
import ContactSection from "./components/Contact/ContactSection"
import ExperienceSection from "./components/experience/ExperienceSection"
import Footer from "./components/Footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import ProjectSection from "./components/Projects/ProjectSection"
import Skills from "./components/Skills/Skills"
import ThemeMenu from "./components/Theme/ThemeMenu"
import { storeContext } from "./components/Context/storeContext"

function App() {
  const {isVisible}=useContext(storeContext);
  return (
    <main className="dark:bg-blue-950">
      
     <Navbar />
     <div className={`${isVisible && 'blur-sm'}`}>
      <Hero  />
      <Skills skills={skillList} />
      <div className={`mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]`}>
        <ProjectSection projects={projects} />
        <div className="flex flex-col lg:flex-row gap-4 justify-around items-center">
          <ExperienceSection className="lg:w-1/2 lg:h-80 bg-black/20 flex flex-col gap-5 rounded-4xl p-8 
        text-black dark:text-neutral-200" />
          <ContactSection className="lg:w-1/2 lg:h-80 bg-black/20 grid grid-cols-1 rounded-4xl p-8 
        text-black dark:text-neutral-200 lg:gap-9" />
        </div>
      </div>
      <Footer />
      <ThemeMenu />
      </div>
    </main>
  );
}

export default App;



