import Image from 'next/image'
import '/app/globals.css';
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScroll(true);
      else setIsScroll(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 z-50 translate-y-[-80%] mt-2'>
        <nav
          className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 
            flex items-center justify-between z-50 ${isScroll ? "bg-white  bg-blur-lg shadow-sm" : ""}`}
        >
          <ul>
            <a href="#top" className="no-underline ms-auto font-bold text-black">
              <h2>Sahil Enterprises</h2>
            </a>
          </ul>
          <ul
            className={`hidden md:flex items-center gap-6 lg:gap-8 
              px-12 py-3  ${isScroll ? "" : "bg-white "}`}
          >
            <li>
              <a href='#top' className='text-black no-underline border-b-0 hover:border-b-4 hover:border-forest-green transition'>Home</a>
            </li>
             <li>
              <a href='#about' className='text-black no-underline border-b-0 hover:border-b-4 hover:border-forest-green transition'>About us</a>
            </li>
            <li>
              <a href='#work' className='text-black no-underline border-b-0 hover:border-b-4 hover:border-forest-green transition'>
                Product and Services
              </a>
            </li>
          
           
            <li>
              <a href='#contact' className='text-black no-underline border-b-0 hover:border-b-4 hover:border-forest-green transition'>Contact us</a>
            </li>
            <li>
              <a href="/sahil-enterprises.pdf" download className="bg-forest-green text-white font-semibold py-2.5 px-4 rounded no-underline">Brouchure</a>
            </li>
          </ul>

          {/* Mobile menu */}
          <ul
            className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen transition-transform duration-500 bg-forest-green text-white
              ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <button className='absolute right-6 top-6 cursor-pointer' onClick={() => setMenuOpen(false)}>
              <RxCross1 size={28} />
            </button>
            <li>
              <a href='#top' className="text-white no-underline border-b-0 hover:border-b-4 hover:border-white transition" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li>
              <a href='#about' className="text-white no-underline border-b-0 hover:border-b-4 hover:border-white transition" onClick={() => setMenuOpen(false)}>About us</a>
            </li>
            <li>
              <a href='#work' className="text-white no-underline border-b-0 hover:border-b-4 hover:border-white transition" onClick={() => setMenuOpen(false)}>Product and Services</a>
            </li>
            <li>
              <a href='#contact' className="text-white no-underline border-b-0 hover:border-b-4 hover:border-white transition" onClick={() => setMenuOpen(false)}>Contact us</a>
            </li>
          </ul>
          {!menuOpen && (
            <button className='block md:hidden ml-3 text-forest-green' onClick={() => setMenuOpen(true)}>
              <CiMenuFries size={32} />
            </button>
          )}
        </nav>
      </div>
    </>
  )
}

export default Navbar