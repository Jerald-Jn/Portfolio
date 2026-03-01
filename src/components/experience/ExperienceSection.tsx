import ExperienceCard from "./ExperienceCard"

const ExperienceSection = (data:any) => {
    return (
        <section
            id="experiences"
            {...data}
            >
            <h2 className="text-center text-3xl font-semibold tracking-wider uppercase text-black dark:text-neutral-200">Experience</h2>
            <div className="flex flex-col justify-center items-center mt-2">
                <ExperienceCard />
            </div>
        </section>
    )
}

export default ExperienceSection
