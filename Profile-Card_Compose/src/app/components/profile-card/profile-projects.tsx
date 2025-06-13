import {useState} from "react";

export const ProfileProjects = ({recentProjects}: {
    recentProjects: { title: string; description: string; link: string }[];
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<null | typeof recentProjects[0]>(null);

    const openModal = (project: typeof recentProjects[0]) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className='mb-6'>
            <h3 className='text-lg font-semibold text-gray-800 mb-1'>Recent Projects</h3>
            <ul className='space-y-2'>
                {recentProjects.map((proj) => (
                    <li key={proj.title}>
                        <button
                            className='text-gray-900 underline hover:text-gray-700 transition text-left font-medium'
                            onClick={() => openModal(proj)}
                            type="button"
                        >
                            {proj.title}
                        </button>
                    </li>
                ))}
            </ul>
            {modalOpen && selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative flex flex-col items-center animate-fade-in">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                            onClick={closeModal}
                            aria-label="Close"
                            type="button"
                        >
                            &times;
                        </button>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">{selectedProject.title}</h4>
                        <p className="text-gray-600 text-center mb-6">{selectedProject.description}</p>
                        <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 underline hover:text-gray-700 mb-6 font-medium"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};