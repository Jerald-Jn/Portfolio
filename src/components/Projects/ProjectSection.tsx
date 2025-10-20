import type { Project } from '../../lib/types'
import ProjectCard from './ProjectCard'

interface ProjectSectionProps {
  projects: Project[]
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className='lg:mx-10 p-4 md:p-10 my-5 text-black dark:text-neutral-100'>
      <h2 className="text-center text-3xl font-semibold tracking-wider pb-2 uppercase">Projects</h2>
      <div className={`my-8 ${projects.length==1?'flex items-center justify-center':'grid grid-cols-1'}  gap-8 md:my-12 md:grid-cols-2`}>
        {projects.map((project) => (
          <ProjectCard key={project.priority} data={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
