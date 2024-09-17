import DecorativeSVG from './components/icon/DecorativeSVG';
import { datacontent } from './data/content';
import SwiperComponent from './components/slider/SwiperComponent'; // Import the Swiper component
import WorkaholicLogo from "./Images/Workaholic.svg";
import ProjectCard from './components/ProjectCard/ProjectCard';
import WorkaholicComponent from './components/hireComponent/WorkaholicComponent';


export default function Home() {
  return (
    <div className="w-full">
      {/* navbar */}
      <div className="w-full h-36 font-semibold bg-[#0F0F0F] flex items-center justify-between px-20 mb-24">
        <h1 className="text-2xl flex flex-row">
          <p className="text-[#7456FF]">Muh</p>
          <p>Ghufran</p>
        </h1>

        <div className="flex flex-row gap-10 items-center text-2xl">
          <p>Home</p>
          <p>About</p>
          <p>Project</p>
          <p>Blog</p>
          <div className="p-4 text-[#7456FF] rounded-lg opacity-45 border-4 border-[#7456FF]">
            Contact Me
          </div>
        </div>
      </div>

      {/* hero */}
      <div className="flex px-20 justify-between">
        <div className="">
          <p className="mb-4 text-4xl font-bold">Hello Buds</p>
          <h1 className="text-5xl font-bold">{datacontent.name}</h1>
          <p className="text-prgraay">{datacontent.work}</p>
          <div className="bg-prgraay w-1/6 mt-12 h-[3px]">
          </div>
          <p className="w-10/12 mt-5  text-prgraay">{datacontent.aboutme}</p>
          <div className="flex flex-row gap-6 mt-5">
            <button className="bg-prlavender  py-4 px-5 bg-opacity-45 text-xl font-bold rounded-xl">
              Download CV
            </button>
            <button className="  py-4 px-16 bg-opacity-100 border-white border-2 text-xl font-bold rounded-xl">
              More
            </button>
          </div>
        </div>
        <div className="">
          <div className="mr-20">
            <DecorativeSVG className="w-auto h-auto" />
          </div>
          <div className="flex flex-row gap-7 mt-12 items-center">
            <div className="text-2xl font-bold">Find Me On</div>
            <div className="bg-prlavender h-12 w-12 opacity-45 rounded-full"></div>
            <div className="bg-prlavender h-12 w-12 opacity-45 rounded-full"></div>
            <div className="bg-prlavender h-12 w-12 opacity-45 rounded-full"></div>
            <div className="bg-prlavender h-12 w-12 opacity-45 rounded-full"></div>


          </div>
        </div>
      </div>

      {/* Service */}
      <div className="mt-44 w-full px-20 h-auto">
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold">What Do I Offer</p>
          <p className="text-4xl font-bold w-2/4 text-center mt-5">Creates Professional Design Thats Oriented Towards Client Needs</p>



          {/* Swiper Component */}
          <div className="mt-20 w-1/2 flex px-20">
            <SwiperComponent />
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="bg-[url('.//Images/background1.png')] flex flex-row gap-5 mt-60 w-full h-[440px] items-center justify-center   ">
        <div className="bg-black bg-opacity-45 w-72 h-64 flex flex-col gap-2 text-center justify-center border-stone-500 hover:bg-[#7456FF] hover:bg-opacity-45 hover:border-none rounded-xl border-2 border-inherit border-spacing-2">
          <p className="text-5xl opacity-100 font-semibold">05</p>
          <p className="text-xl opacity-100">Clients Order</p>
        </div>

        <div className="bg-black bg-opacity-45 w-72 h-64 flex flex-col gap-2 text-center justify-center border-stone-500 hover:bg-[#7456FF] hover:bg-opacity-45 hover:border-none rounded-xl border-2 border-inherit border-spacing-2">
          <p className="text-5xl opacity-100 font-semibold">03</p>
          <p className="text-xl opacity-100">Completed Projects</p>
        </div>

        <div className="bg-black bg-opacity-45 w-72 h-64 flex flex-col gap-2 text-center justify-center border-stone-500 hover:bg-[#7456FF] hover:bg-opacity-45 hover:border-none rounded-xl border-2 border-inherit border-spacing-2">
          <p className="text-5xl opacity-100 font-semibold">04</p>
          <p className="text-xl opacity-100">Stars Rating</p>
        </div>

        <div className="bg-black bg-opacity-45 w-72 h-64 flex flex-col gap-2 text-center justify-center border-stone-500 hover:bg-[#7456FF] hover:bg-opacity-45 hover:border-none rounded-xl border-2 border-inherit border-spacing-2">
          <p className="text-5xl opacity-100 font-semibold">08</p>
          <p className="text-xl opacity-100">Months Of Experience</p>
        </div>
      </div>

      <div className="w-screen relative mt-36">
        <div className="absolute w-screen bottom-36 left-[43.5vw] ">
          <p className="text-5xl font-semibold ">Latested Project</p>
        </div>
        <p className="  flex text-[200px]  ml-[-115px] text-[#0C0C0C] font-semibold font-outline-2 ">MY PROJECT</p>
      </div>

      <div className="flex flex-col gap-12 ">

        <ProjectCard
          imgBg="./Images/placeHolderProject.png"
          title="DaurUang Mobile Apps"
        />


      </div>

      <div className='flex flex-row justify-between items-center p-12 bg-trblack border-white border border-opacity-5 mx-12 rounded-2xl  mt-24'>
        <div className='flex flex-col'>
          <p className='text-[32px] font-semibold '>Have any project in mind?</p>
          <p className='text-base text-prgraay'>I'm available for freelancing</p>
        </div>

        <div className='flex flex-row gap-8'>
          <button className='text-xl font-semibold px-5 py-4 border border-white bg-opacity-45 rounded-md'>More Projects</button>
          <button className='text-xl flex flex-row items-center gap-2 font-semibold px-5 py-4 bg-prlavender bg-opacity-45 rounded-md'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16666 3.33325H15.8333C16.4964 3.33325 17.1323 3.59664 17.6011 4.06549C18.0699 4.53433 18.3333 5.17021 18.3333 5.83325V14.1666C18.3333 14.8296 18.0699 15.4655 17.6011 15.9344C17.1323 16.4032 16.4964 16.6666 15.8333 16.6666H4.16666C3.50362 16.6666 2.86774 16.4032 2.39889 15.9344C1.93005 15.4655 1.66666 14.8296 1.66666 14.1666V5.83325C1.66666 5.17021 1.93005 4.53433 2.39889 4.06549C2.86774 3.59664 3.50362 3.33325 4.16666 3.33325ZM4.16666 4.99992L9.58333 8.72492C9.71001 8.79806 9.85371 8.83656 10 8.83656C10.1463 8.83656 10.29 8.79806 10.4167 8.72492L15.8333 4.99992H4.16666Z" fill="#F8F8F8" />
            </svg>
            <span>Email Me</span>
          </button>
        </div>
      </div>

      <div className="w-screen relative mt-16">
        <div className="absolute w-screen bottom-36 left-[43.5vw] ">
          <p className="text-5xl font-semibold ">Why Hire Me</p>
        </div>
        <p className="  flex text-[200px]  ml-[-251px] text-[#0C0C0C] font-semibold font-outline-2 ">WHY HIRE ME</p>
      </div>

      <div className='flex flex-row justify-center px-24 gap-24 '>
        <WorkaholicComponent
          logoSrc={WorkaholicLogo}
          title="Workaholic"
          description="I’m a kind of person who can’t just stand around and doing nothing. I have a tendency to do something productive."
        />
        <WorkaholicComponent
          logoSrc={WorkaholicLogo}
          title="Communicative"
          description="I have a broad understanding of verbal vocabulary. Therefore, I can convey a message well to the receiver."
        />
        <WorkaholicComponent
          logoSrc={WorkaholicLogo}
          title="Cooperative"
          description="Behind the successful project, there’s a great team. I can build a good cooperation and remain consistent with the goal."
        />
        <WorkaholicComponent
          logoSrc={WorkaholicLogo}
          title="Perfectionist"
          description="I have a strong intuition. I have remained consistent with high quality standards to present a most worthy result."
        />
      </div>

    </div>
  );
}