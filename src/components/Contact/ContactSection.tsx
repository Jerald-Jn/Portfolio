import { MsgIcon, PhoneIcon } from '../../utils/icons'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-black/20 my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:gap-8 
       text-black dark:text-neutral-200 lg:gap-12">
      <h2 className="text-center text-3xl font-semibold tracking-wider pb-2 uppercase
        ">Contact me</h2>
      <div className="flex flex-col-2 gap-8">
        <div className='ml-20'>
          <h3 className=" text-3xl font-bold">Let's Talk</h3>
          <p className="text-neutral mt-8 md:block hidden">
            Crafting innovative solutions to solve real-world problems
          </p>
        </div>

        <div className="space-y-2 text-black dark:text-neutral-200">
          <p className="text-neutral text-lg font-bold">Contact Information</p>
          <a
            href="mailto:jjerald2000@gmail.com"
            className="text-black dark:text-neutral-200  hover:text-accent flex items-center gap-1 font-semibold transition-colors duration-300">
            <MsgIcon className='text-black dark:text-neutral-200' /> jjerald2000@gmail.com
          </a>
          <a
            href="tel:+91 7094949563"
            className="text-black dark:text-neutral-200 hover:text-accent flex items-center gap-1 font-semibold transition-colors duration-300">
            <PhoneIcon className='text-black dark:text-neutral-200' /> +91 7094949563
          </a>
        </div>
      </div>
      <div className='flex justify-center'>
        <a className='text-center bg-blue-500 h-10 w-40 p-2 rounded-2xl'href="/MyResume.pdf" download>Download CV</a>
      </div>
    </section>
  )
}

export default ContactSection
