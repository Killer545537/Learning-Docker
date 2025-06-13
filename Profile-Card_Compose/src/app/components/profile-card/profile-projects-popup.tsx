"use client"

import {useState} from "react"

type Project = {
    title: string
    description: string
    link: string
}

export const ProfileProjectsPopup = ({
                                         recentProjects,
                                     }: {
    recentProjects: Project[]
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    const openPopup = () => {
        setIsOpen(true)
        setSelectedProject(null)
    }

    const closePopup = () => {
        setIsOpen(false)
        setSelectedProject(null)
    }

    const showProjectDetails = (project: Project) => {
        setSelectedProject(project)
    }

    const backToList = () => {
        setSelectedProject(null)
    }

    return (
        <div className="mb-6">
            <button
                onClick={openPopup}
                className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition-colors cursor-pointer"
                type="button"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className='cursor-pointer'
                >
                    <path d="M3 3h7v7H3z"></path>
                    <path d="M14 3h7v7h-7z"></path>
                    <path d="M14 14h7v7h-7z"></path>
                    <path d="M3 14h7v7H3z"></path>
                </svg>
                View Recent Projects
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-300">
                    <div className="bg-white rounded-2xl p-6 max-w-xl w-full shadow-2xl relative animate-fade-in">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                            onClick={closePopup}
                            aria-label="Close"
                            type="button"
                        >
                            &times;
                        </button>

                        {selectedProject ? (
                            <div className="flex flex-col items-center">
                                <button
                                    onClick={backToList}
                                    className="self-start flex items-center text-gray-900 hover:text-gray-700 mb-4 font-medium transition-colors"
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="mr-1 cursor-pointer"
                                    >
                                        <path d="m15 18-6-6 6-6"></path>
                                    </svg>
                                    Back to projects
                                </button>

                                <h4 className="text-2xl font-bold text-gray-900 mb-4">{selectedProject.title}</h4>
                                <p className="text-gray-700 text-center mb-6">{selectedProject.description}</p>
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full block text-center bg-gradient-to-b from-gray-700 to-black text-white py-3 rounded-2xl font-medium text-lg shadow-lg shadow-black/30 border border-gray-600 hover:from-gray-600 hover:to-gray-900 transition-all duration-200 active:shadow-md active:shadow-black/40 mb-2"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Projects</h3>
                                <ul className="space-y-3">
                                    {recentProjects.map((project) => (
                                        <li key={project.title} className="border-b border-gray-100 pb-3 last:border-0">
                                            <button
                                                onClick={() => showProjectDetails(project)}
                                                className="w-full text-left hover:bg-gray-50 p-2 rounded-lg transition-colors"
                                                type="button"
                                            >
                                                <div className="font-medium text-gray-900 hover:text-gray-700 transition-colors">
                                                    {project.title}
                                                </div>
                                                <div className="text-gray-600 text-sm truncate">{project.description.substring(0, 60)}...</div>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}