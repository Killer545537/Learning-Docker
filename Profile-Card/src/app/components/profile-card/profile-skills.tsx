export const ProfileSkills = ({ title, skills, languages, technologies }: {
    title: string;
    skills: string[];
    languages: { name: string }[];
    technologies: string[];
}) => (
    <div className='mb-6'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-4'>{title}</h2>
        <div className='flex gap-2 mb-2'>
            {skills.map(skill => (
                <span key={skill} className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'>{skill}</span>
            ))}
        </div>
        <div className='mb-2'>
            <h4 className='text-md font-semibold text-gray-800 mb-1'>Languages</h4>
            <div className='flex gap-2 flex-wrap'>
                {languages.map(lang => (
                    <span key={lang.name} className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-2'>
                        {lang.name}
                    </span>
                ))}
            </div>
        </div>
        <div>
            <h4 className='text-md font-semibold text-gray-800 mb-1'>Technologies</h4>
            <div className='flex gap-2 flex-wrap'>
                {technologies.map(tech => (
                    <span key={tech} className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'>{tech}</span>
                ))}
            </div>
        </div>
    </div>
);