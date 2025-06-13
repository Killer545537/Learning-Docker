export const ProfileContact = ({contact}: { contact: { email: string; phone: string } }) => (
    <div className='mb-6'>
        <h3 className='text-lg font-semibold text-gray-800 mb-1'>Contact</h3>
        <div className='text-gray-600 text-sm'>
            <div>Email: <a href={`mailto:${contact.email}`} className='underline'>{contact.email}</a></div>
            <div>Phone: <a href={`tel:${contact.phone}`} className='underline'>{contact.phone}</a></div>
        </div>
    </div>
);