const ExperienceSection = (data:any) => {
    return (
        <section
            id="experiences"
            {...data}
            >
            <h2 className="text-center text-3xl font-semibold tracking-wider uppercase">EXperience</h2>
            <div className="flex flex-col justify-center items-center">
                <h3 className=" text-3xl font-bold text-center mt-3 lg:mt-5">Software Engineer</h3>
                <div className=" grid grid-cols-1 text-black dark:text-neutral-200">
                        <h4 className="text-neutral text-lg font-bold">Trackeasy Software Solutions</h4>
                        <p className="text-neutral text-md font-semibold">January-2025 - January-2026</p>
                        <p className="text-neutral text-md font-semibold">Thanjavur, TamilNadu, India</p>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection
