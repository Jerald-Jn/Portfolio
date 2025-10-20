import { educations } from "../../appData/personal";
import { EducationCard } from "./EducationCard";

export function EducationsSection() {
    return (
        <section id="educations" className=" pt-5 text-black dark:text-neutral-100">
            <h2 className="text-center text-3xl font-semibold tracking-wider pb-2 uppercase">Educations</h2>
            <div className={`my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2 lg:mx-52`}>
                {educations.map((education) => (
                    <EducationCard key={education.Course} data={education} />
                ))}
            </div>
        </section>
    )
}