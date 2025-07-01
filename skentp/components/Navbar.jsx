import  Image from 'next/image'
import '/app/globals.css' ;
// /app/layout.js or /pages/_app.js



import Head from "next/head";
import { GoArrowUpRight } from "react-icons/go";
import { CiDark } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useRef,useEffect,useState } from 'react';
 const Navbar = () => {
  const[isScroll,setIsScroll] = useState(false);
  const sideMenuRef =useRef();

  const openMenu =()=>{
    sideMenuRef.current.style.transform = 'translateX(0)'
  }
  const closeMenu =()=>{
    sideMenuRef.current.style.transform = 'translateX(100%)'
  }
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        if(scrollY >50){
          setIsScroll(true)
        }
        else{
          setIsScroll(false)
        }
    })
  })
  
 return (
    <>
    
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'> 
      
    
   <nav
  className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 
    flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 bg-blur-lg shadow-sm" : ""}`}
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
  <li className="relative group">
    <a href="#work" className="text-black no-underline border-b-0 hover:border-b-4 hover:border-forest-green transition">
      Product and Services
      
    </a>
    {/* Dropdown menu */}
    <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
      <li>
        <a href="#product1" className="block px-4 py-2 text-black no-underline border-b-0 hover:border-b-4 hover:border-forest-green transition">
          Product 1
        </a>
      </li>
      <li>
        <a href="#product2" className="block px-4 py-2 text-black no-underline border-b-0 hover:border-b-4 hover:border-forest-green transition">
          Product 2
        </a>
      </li>
      <li>
        <a href="#service1" className="block px-4 py-2 text-black no-underline border-b-0 hover:border-b-4 hover:border-forest-green transition">
          Service 1
        </a>
      </li>
    </ul>
  </li>
  <li>
    <a href='#contact' className='text-black no-underline border-b-0 hover:border-b-4 hover:border-forest-green transition'>Contact us</a>
  </li>
  <li>
    <a href="/sahil-enterprises.pdf" download className="bg-forest-green text-white font-semibold py-2.5 px-4 rounded no-underline">Brouchure</a>
  </li>
</ul>
        {/* mobile-menu-icons */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0
        w-64 z-50 h-screen bg-indigo-900 transition duration-500 text-white  '>
          <button className='absolute right-6 top-6 cursor-pointer' onClick={closeMenu}>
          <RxCross1  onClick={closeMenu} />
          </button>
          <li><a href='#top' className="text-black no-underline border-b-0 hover:border-b-2 hover:border-forest-green transition"onClick={closeMenu}>Home</a></li>
            <li><a href='#about' className="text-black no-underline border-b-0 hover:border-b-2 hover:border-forest-green transition"onClick={closeMenu}>About us</a></li>

            <li><a href='#work' className="text-black no-underline border-b-0 hover:border-b-2 hover:border-forest-green transition"onClick={closeMenu}>Product and Services</a></li>

            <li><a href='#contact'className="text-black no-underline border-b-0 hover:border-b-2 hover:border-forest-green transition"  onClick={closeMenu}>Contact us</a></li>

        </ul>
    </nav>
     </div>   
    </>
  )
}

export default Navbar
