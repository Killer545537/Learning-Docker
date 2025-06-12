import Image from "next/image";

export const ProfileHeader = ({avatar, name, location, status, statusColor}: {
    avatar: string;
    name: string;
    location: string;
    status: string;
    statusColor: string;
}) => (
    <div className='flex items-center gap-6 mb-6'>
        <div className='rounded-2xl w-24 h-24 overflow-hidden'>
            <Image src={avatar} alt='Profile Image' width={96} height={96} className='w-full h-full object-cover'/>
        </div>
        <div>
            <div className='flex items-center gap-2 mb-1'>
                <span className='text-2xl font-bold text-gray-900'>{name}</span>
                <span className='text-gray-500 text-base'>{location}</span>
            </div>
            <div className={`${statusColor} text-white px-3 py-2 rounded-full text-xs font-medium inline-block`}>
                <span className='font-bold'>{status}</span>
            </div>
        </div>
    </div>
);