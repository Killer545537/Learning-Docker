export const ProfileAbout = ({about}: { about: string }) => (
    <div className='mb-6'>
        <h3 className='text-lg font-semibold text-gray-800 mb-1'>About</h3>
        <p className='text-gray-600 text-sm'>{about}</p>
    </div>
);