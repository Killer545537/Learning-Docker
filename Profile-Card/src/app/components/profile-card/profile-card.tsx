import {ProfileHeader} from "./profile-header";
import {ProfileSkills} from "./profile-skills";
import {ProfileAbout} from "./profile-about";
import {ProfileStats} from "./profile-stats";
import {ProfileContact} from "./profile-contact";
import {ProfileProjectsPopup} from "./profile-projects-popup";

const profile = {
    name: "Srijan Mahajan",
    location: "Delhi, India",
    title: "Software Engineer",
    avatar: "/profile-card.jpg",
    status: "AVAILABLE",
    statusColor: "bg-blue-800",
    skills: ["Full-Stack", "System Design", "Open Source"],
    languages: [
        {name: "C++"},
        {name: "Rust"},
        {name: "Python"},
        {name: "JavaScript"},
        {name: "Haskell"}
    ],
    technologies: ["Next.js", "React", "Actix", "TailwindCSS"],
    projects: 5,
    projectsUrl: "https://github.com/Killer545537",
    projectsInProgress: 2,
    linkedin: "https://www.linkedin.com/in/srijan-mahajan-035680294/",
    about: "Passionate developer with a love for building scalable systems and beautiful interfaces.",
    contact: {
        email: "srajanmahajan1@gmail.com",
        phone: "+91 8178863697"
    },
    recentProjects: [
        {
            title: "Portfolio Website",
            description: "A personal portfolio built with Next.js and TailwindCSS.",
            link: "https://github.com/Killer545537/portfolio"
        },
        {
            title: "SaaS Platform",
            description: "A scalable SaaS platform with user authentication and billing.",
            link: "https://github.com/Killer545537/saas-platform"
        },
        {
            title: "Open Source CLI",
            description: "A command-line tool for automating tasks, written in Rust.",
            link: "https://github.com/Killer545537/cli-tool"
        }
    ],
};

export const ProfileCard = () => {
    return (
        <div className='min-h-screen bg-gray-200 flex items-center justify-center p-4'>
            <div className='bg-white rounded-3xl p-6 w-full max-w-lg shadow-lg'>
                <ProfileHeader
                    avatar={profile.avatar}
                    name={profile.name}
                    location={profile.location}
                    status={profile.status}
                    statusColor={profile.statusColor}
                />
                <ProfileSkills
                    title={profile.title}
                    skills={profile.skills}
                    languages={profile.languages}
                    technologies={profile.technologies}
                />
                <ProfileAbout about={profile.about}/>
                <ProfileStats
                    projects={profile.projects}
                    projectsUrl={profile.projectsUrl}
                    projectsInProgress={profile.projectsInProgress}
                />
                <ProfileProjectsPopup recentProjects={profile.recentProjects}/>
                <ProfileContact contact={profile.contact}/>
                <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-gradient-to-b from-gray-700 to-black text-white py-4 rounded-2xl font-medium text-lg shadow-lg shadow-black/30 border border-gray-600 hover:from-gray-600 hover:to-gray-900 transition-all duration-200 active:shadow-md active:shadow-black/40"
                >
                    Connect
                </a>
            </div>
        </div>
    )
};