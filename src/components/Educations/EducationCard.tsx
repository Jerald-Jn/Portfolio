export function EducationCard(data: any) {
    return (
        <div className="flex flex-col bg-black/20 gap-2 p-5 rounded-3xl">
            <h3 className="text-black dark:text-neutral-200 text-center text-2xl font-medium md:font-semibold">{data.data.Course}</h3>
            <div className="flex flex-col justify-start">
                {Object.entries(data.data).map(([key, value]) => {
                    if (key == 'Course') return;
                    return (<p key={key} className=" ">
                        <strong className="text-black dark:text-neutral-200">{key}:</strong>
                        <span className="pl-2">{value as React.ReactNode}</span>
                    </p>)
                })}
            </div>
        </div>
    )
}