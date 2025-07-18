import './App.css'
import DesktopImageHero1 from "../images/desktop-image-hero-1.jpg"
import DesktopImageHero2 from "../images/desktop-image-hero-2.jpg"
import DesktopImageHero3 from "../images/desktop-image-hero-3.jpg"
import MobileImageHero1 from "../images/mobile-image-hero-1.jpg"
import MobileImageHero2 from "../images/mobile-image-hero-2.jpg"
import MobileImageHero3 from "../images/mobile-image-hero-3.jpg"
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from './components/Nav';
import { useState, useEffect } from 'react'
import AboutImageDark from "../images/image-about-dark.jpg"
import AboutImageLight from "../images/image-about-light.jpg"
import arrow from "../images/icon-arrow.svg"


const slides = [{MobileImage: MobileImageHero1, DesktopImage: DesktopImageHero1, alt: "Image Hero 1"},
                {MobileImage: MobileImageHero2, DesktopImage: DesktopImageHero2, alt: "Image Hero 2"},
              {MobileImage: MobileImageHero3, DesktopImage: DesktopImageHero3, alt: "Image Hero 3``"}]

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main className='p-0 m-0 w-screen font-league-spartan text-body-size text-dark-gray text-left text-base
    grid grid-cols-1 md:grid-cols-3 gap-0'>    
        <section className="w-full h-fit m-0 p-0 relative md:col-span-2">
          <Nav/>
          <img
            src={isMobile ? slides[current].MobileImage : slides[current].DesktopImage}
            alt={slides[current].alt}
            className="object-cover w-full h-full object-center"
          />

             <div className="absolute bottom-0 right-0 flex justify-between items-center p-2 gap-2 space-x-2 bg-black">
          <button onClick={prevSlide} className="rounded-none px-2 py-1 bg-black">
            <FontAwesomeIcon icon={faChevronLeft} className='text-white h-4 w-4'/> 
          
          </button>
          <button onClick={nextSlide} className="rounded-none px-2 py-1 bg-black">
           <FontAwesomeIcon icon={faChevronRight} className='text-white h-4 w-4'/> 
          </button>
        </div>
        </section>


      <div className="w-full flex flex-col justify-center px-6 py-8 md:p-16 space-y-8">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            Discover innovative ways to decorate
          </h1>
          <p className="mt-4 text-gray-600 md:max-w-md">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in bringing
            your vision to life. Create a room in your own style with our collection
            and make your property a reflection of you and what you love.
          </p>
         <button className='flex gap-4 w-fit px-4  py-6 pl-0'>
          <p className='text-very-dark-gray tracking-[5px] font-semibold text-xl'> SHOP NOW</p> 
          <img src={arrow} alt="" className='h-6'/>         
           </button>
        </div> 
      </div>
  
      <section className="w-full h-full m-0 p-0 relative bg-cover bg-center min-h-[300px]" 
        style={{ backgroundImage: `url(${AboutImageDark})` }}>
        </section>

        <section className='bg-white  w-full h-fit p-8 md:p-12 py-10 md:py-14 flex flex-col gap-6 justify-center'>
        <h2 className='uppercase text-2xl md:text-3xl text-very-dark-gray font-bold'>about our furniture</h2>
        <p>Our multifunctional collection blends design and function to suit your individual taste. 
          Make each room unique, or pick a cohesive theme that best express your interests and what 
          inspires you. Find the furniture pieces you need, from traditional to contemporary styles or 
          anything in between. Product specialists are available to help you create your dream space. 
          </p>
        </section>


       <section className="w-full h-full m-0 p-0 relative bg-cover bg-center min-h-[300px]" 
        style={{ backgroundImage: `url(${AboutImageLight})` }}>
        </section>
    </main>
  )
}


