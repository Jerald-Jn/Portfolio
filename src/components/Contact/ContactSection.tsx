import { MsgIcon, PhoneIcon } from '../../utils/icons'

const ContactSection = (data:any) => {
  return (
    <section
      id="contact"
      {...data}
       >
      <h2 className="text-center text-3xl font-semibold tracking-wider uppercase
        ">Contact me</h2>
        <div className=" justify-center items-center text-black flex flex-col dark:text-neutral-200">
          <h3 className="text-3xl font-bold text-centerm mt-3">Let's Talk</h3>
          <p className="text-lg font-bold">Contact Information</p>
          <a
            href="mailto:jjerald2000@gmail.com"
            className="text-black dark:text-neutral-200  hover:text-neutral-500 flex items-center gap-1 dark:hover:text-neutral-500
            font-semibold transition-colors duration-300">
            <MsgIcon className='text-black dark:text-neutral-200' /> jjerald2000@gmail.com
          </a>
          <a
            href="tel:+91 7094949563"
            className="text-black dark:text-neutral-200 hover:text-neutral-500 flex items-center gap-1 dark:hover:text-neutral-500
            font-semibold transition-colors duration-300">
            <PhoneIcon className='text-black dark:text-neutral-200' /> +91 7094949563
          </a>
        </div>
      <div className='flex justify-center items-center lg:-mt-4 mt-4'>
        <a className='text-center hover:bg-blue-400 bg-blue-500 h-10 w-40 p-2 rounded-2xl '
        href="/Jerald_Scooty_Resume.pdf" download>Download CV</a>
      </div>
    </section>
  )
}

export default ContactSection
