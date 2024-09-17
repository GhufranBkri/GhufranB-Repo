import Image from 'next/image';

interface WorkaholicComponentProps {
  logoSrc: string; // Path atau URL dari logo yang ingin digunakan
  title: string; // Judul yang ingin ditampilkan
  description: string; // Teks deskripsi yang ingin ditampilkan
}

const WorkaholicComponent: React.FC<WorkaholicComponentProps> = ({ logoSrc, title, description }) => {
  return (
    <div className='flex items-center flex-col'>
      <div className='p-5 w-fit flex items-center justify-center rounded-full border border-prgray border-opacity-30'>
        <div className='flex items-center p-14 bg-[#7456FF] bg-opacity-10 border border-prlavender border-opacity-45 rounded-full'>
          <Image src={logoSrc} alt="Workaholic Logo" />
        </div>
      </div>
      <div className='mt-16 w-auto flex flex-col items-center justify-center gap-5'>
        <p className='text-[28px] '>{title}</p>
        <p className='text- w-full text-prgraay'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkaholicComponent;
