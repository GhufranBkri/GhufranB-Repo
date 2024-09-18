// ProjectCard.tsx
import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ProjectCardProps {
    imgBg: StaticImageData;
    title: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgBg, title }) => {
    return (
        <div className="flex flex-row justify-between items-center p-12 bg-trblack border-white border border-opacity-5 mx-12 rounded-3xl">
            <Image src={imgBg} alt="Workaholic Logo" width={500} height={300} className='bg-cover bg-center' />
            <p className="text-[32px] font-semibold text-center">{title}</p>
            <button className="text-xl font-semibold px-5 py-4 bg-prlavender bg-opacity-45 rounded-md">View Details</button>
        </div>
    );
};

export default ProjectCard;
