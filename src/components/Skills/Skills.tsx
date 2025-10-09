type SkillsProps = {
  skills: { name: string; icon: string }[]
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="lg:h-44 min-h-auto p-4 bg-black/18 dark:bg-white/10">
      <h2 className="text-center text-3xl font-semibold tracking-wider p-2 uppercase
        text-black dark:text-neutral-100">Skills</h2>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-10 lg:gap-15 lg:mx-18">
        {skills.map(({ name, icon }, index) => (
          <span
            key={index}
            className="text-black dark:text-white flex items-center text-xs lg:text-base">
            <img src={icon} alt={name} className="mx-2 size-11 lg:size-14" />
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
