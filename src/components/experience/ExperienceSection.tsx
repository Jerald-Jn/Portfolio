const ExperienceSection = () => {
    return (
        <section
            id="experiences"
            className="bg-black/20 my-8 grid grid-cols-1 gap-10 rounded-4xl p-8 md:my-16 md:gap-5 
       text-black dark:text-neutral-200 lg:gap-9">
            <h2 className="text-center text-3xl font-semibold tracking-wider pb-2 uppercase
        ">EXperience</h2>
            <div>
                <h3 className=" text-3xl font-bold text-center">Trackeasy Software Solutions</h3>
            </div>
            <div className="flex flex-col-2 gap-8">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 text-black dark:text-neutral-200">
                    <div className=''>
                        <h4 className="text-neutral text-lg font-bold">Junior Software Engineer</h4>
                        <p className="text-neutral text-md font-semibold">June 2023 - Present</p>
                        <p className="text-neutral text-md font-semibold">Bengaluru, India (Remote)</p>
                    </div>
                    <div>
                        <h5>Address</h5>
                        <ul>
                            <li>Trackeasy Software Solutions</li>
                            <li>Thanjavur</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <a className='text-center bg-blue-500 h-10 w-40 p-2 rounded-2xl' href="/MyResume.pdf" download>Download CV</a>
            </div>
        </section>
    )
}

export default ExperienceSection
