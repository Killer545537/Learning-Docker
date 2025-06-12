import Link from "next/link";

export const ProfileStats = ({
                                 projects,
                                 projectsUrl,
                                 projectsInProgress,
                                 onProjectsClick,
                             }: {
    projects: number;
    projectsUrl: string;
    projectsInProgress: number;
    onProjectsClick?: () => void;
}) => (
    <div className='flex justify-between items-center mb-6'>
        <div>
            <button
                className='text-2xl font-semibold text-gray-900 focus:outline-none'
                onClick={onProjectsClick}
                type="button"
            >
                {projects}
            </button>
            <Link href={projectsUrl} target="_blank" rel="noopener noreferrer" className='text-gray-500 ml-1 underline hover:text-gray-700 transition'>
                projects
            </Link>
        </div>
        <div className='text-gray-600'>{projectsInProgress} in progress</div>
    </div>
);