import { socials } from "../../appData/personal"

const Footer = () => {
  return (
    <footer className="bg-black/40 dark:backdrop-blur-3xl relative flex min-h-[250] flex-col justify-between gap-2 overflow-hidden px-10 pt-4 pb-8 text-black dark:text-neutral-100">
      <div className="relative z-20 grid grid-rows-1 md:grid md:grid-cols-2 md:gap-12 text-black dark:text-neutral-100">
        <div className="flex flex-col lg:flex-row justify-between gap-[200px] md:flex-row md:gap-8">
          <div className="space-y-10 md:self-end flex flex-col">
            <div className="flex flex-col">
              <h5 className=" mb-4 text-lg font-semibold uppercase">Contact Us</h5>
              <a
                href="mailto:jjerald2000@gmail.com"
                className=" hover:text-neutral-500 font-semibold text-ms transition-colors duration-300">
                jjerald2000@gmail.com
              </a>
              <a
                href="tel:+91 7094949563"
                className="hover:text-neutral-500 font-semibold text-ms transition-colors duration-300">
                +91 7094949563
              </a>
            </div>
            <div className='text-black dark:text-neutral-100'>
              <div className="mt-2 flex flex-wrap gap-8">
                {
                  socials.map((social) =>(
                    <a 
                      href={social.href} 
                      key={social.href}
                      target='_blank'
                      className=" fill-black dark:fill-neutral-50 hover:fill-black/50 dark:hover:fill-neutral-100/70"
                    >
                      {social.icon}
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-200/25 absolute top-1/2 -right-[40%] z-0 h-[50dvw] w-[100dvw] -translate-y-1/2 rounded-full p-14 md:top-0 md:-right-[255px] md:-bottom-[450px] md:size-[1030px] md:-translate-y-0 md:p-20">
        <div className="bg-neutral-200/18 size-full rounded-full p-14 md:p-20">
          <div className="bg-neutral-200 size-full rounded-full" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
