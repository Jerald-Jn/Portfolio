import type { Project } from '../../lib/types';
import { GithubIcon, PreviewIcon } from '../../utils/icons'


interface ProjectCardProps {
  data: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const {title,cover,livePreview,githubLink,shortDescription} = data;
  

  return (
    <div className="w-1/2 border-border flex flex-col justify-between rounded-[14px] border p-5 mx-auto hover:scale-110 
    transition-transform duration-1500">
      <div className=" items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
            <h3 className="text-black dark:text-neutral-200 text-lg font-medium uppercase md:font-semibold">{title}</h3>
          </div>
        </div>
        <figure className="flex justify-end overflow-hidden">
        <div className="text-black dark:text-neutral-200 my-4 h-[100px] overflow-y-hidden rounded-2xl  py-2">
          <p className="text-[14px] font-normal md:text-base md:block hidden">{shortDescription}</p>
        </div>
          <img
            src={cover}
            width={150}
            height={80}
            alt="Project Cover"
            className="h-[80px] w-[150px] rounded-md object-cover shadow-[0px_1.66px_3.74px_-1.25px_#18274B1F]"
          />
        </figure>
      </div>

      <div>
      
        <div className="flex lg:gap-2">
          {livePreview && (
            <a
              href={livePreview}
              className="text-black dark:text-neutral-200 flex gap-2 text-sm underline underline-offset-[3px] 
              transition-all duration-75 ease-linear hover:scale-105 md:text-base"
              target="_blank">
              <PreviewIcon className="h-auto w-[18px] md:w-5" />
              <span>Live Preview</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
