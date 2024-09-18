import React from 'react';

interface ContactItemProps {
    IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    value: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ IconComponent, label, value }) => {
    return (
        <div className='flex flex-row gap-5 items-center'>
            {/* Render SVG Icon */}
            <IconComponent width="42" height="42" />

            {/* Email or other label and value */}
            <div className='flex flex-col text-base'>
                <p className='text-srgray'>{label}</p>
                <p className='text-white'>{value}</p>
            </div>
        </div>
    );
};

export default ContactItem;