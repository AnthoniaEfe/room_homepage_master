import { faX, faBars,} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import logo from "../../images/logo.svg"

const navItems = ['home', 'shop', 'about', 'contact'];

export default function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className='w-full absolute top-0 left-0 flex flex-row m-0 p-8 gap-4 justify-between md:justify-around items-center' 
    aria-label="Main navigation">
        <div className='flex flex-row md:flex-row-reverse m-0 gap-8 md:gap-10 justify-evenly items-start'>
          {isMobile ? <div className='flex flex-column m-0 px-8 justify-center items-center ' onClick={() => setIsOpen(!isOpen)} 
           aria-controls="mobile-menu">
            <FontAwesomeIcon icon={isOpen ? faX : faBars} alt="menu icons" className='text-gray5600 h-4 z-100'/>
                </div> : (
                <ul className="flex flex-row m-0 gap-4 justify-center items-center" role="menubar">
                {navItems.map((item) => (
                  <li key={item} role="menuitem" className='cursor-pointer text-white text-base'>
                    {item}
                  </li>))}
                </ul>
          )}

           <img src={logo} alt="logo" className='h-4 cursor-pointer my-auto mx-0'/> 
        </div>

        <div className='flex flex-row m-0 gap-6 md:gap-8 justify-between items-center'>
       </div>

       

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed top-0 right-full translate-x-[100%] w-[100%] h-full  bg-black/50 z-50">
        <div className="fixed top-0 w-full h-fit px-4 py-8 bg-white transition-[down] duration-[3000ms] ease-in-out 
        shadow-[2px_0_8px_rgba(0,0,0,0.1)]">
          <ul className="list-none gap-8 flex flex-row items-end justify-center">
            {navItems.map((item) => (
              <li
                key={item}
             className="text-base text-very-dark-gray font-semibold cursor-pointer transition-colors duration-300 ease-in-out"
                role="menuitem"
              >
                {item}
              </li>
            ))}
          </ul> </div> 
          </div>
        )}
      </nav>
  )
}
