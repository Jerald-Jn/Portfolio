import { HeroImage } from '../../utils/images'
import Ellipse from './Ellipse'
import { useRotatingAnimation } from "../hooks/useRotatingAnimation";
import { socials } from '../../appData/personal';
import useRoleSwitcher from '../hooks/useRoleSwitcher';

const Hero = () => {
    const ellipseRef = useRotatingAnimation()

  const roles = ['Java Developer', 'React.js Developer', 'Fullstack Developer'];
  const role=useRoleSwitcher(roles);
  return (
    <section
    id='home'
      className="
      bg-[url('/src/assets/images/bg-sm.svg')]
      dark:bg-blue-950
        lg:min-h-[calc(100vh-15rem)] 
        md:min-h-[calc(100vh-40rem)] 
        min-h-[calc(100vh-11rem)] 
        overflow-x-hidden
        bg-no-repeat bg-center
        bg-[length:800px] md:bg-[length:1000px] lg:bg-[length:1200px]
        flex items-center justify-center"
    >
      <div
        className="
          max-w-6xl w-full mx-auto px-6
          grid grid-cols-1 md:grid-cols-2 items-center gap-10
        "
      >
        {/* --- Left Text Content --- */}
        <div className="flex flex-col justify-center gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight text-black dark:text-neutral-100">
              Hi, I’m <span className="text-sky-800 dark:text-sky-600 text-4xl">Jerald Scooty</span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-black dark:text-neutral-100 mt-2">
              {role}
            </p>
          </div>

          <h2 className="text-black dark:text-sky-400 text-base md:text-lg">
            Crafting innovative solutions to solve real-world problems.
          </h2>

          <div className="mt-2 flex flex-wrap gap-8">
            {
              socials.map((social) =>(
                <a 
                  href={social.href} 
                  key={social.href}
                  target='_blank'
                  className=" fill-black dark:fill-neutral-100 hover:fill-neutral-500 dark:hover:fill-neutral-500"
                >
                  {social.icon}
                </a>
              ))
            }
          </div>
        </div>

        {/* --- Right Image Content --- */}
        <div className="flex justify-center items-center relative overflow-hidden">
          <div className="relative w-56 sm:w-64 md:w-80 lg:w-[26rem] aspect-square dark:text-white">
            <img
              src={HeroImage}
              alt="Jerald Scooty - Full Stack Developer"
              className="object-contain w-full h-full p-10 sm:p-14 lg:p-15"
            />
            <Ellipse 
            ref={ellipseRef} 
            className="absolute top-0 left-0 size-56 transition-transform duration-500 
            ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
