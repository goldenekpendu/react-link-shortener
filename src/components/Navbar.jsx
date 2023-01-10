import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png'
import { Twirl as Hamburger } from 'hamburger-react'
import gsap from 'gsap';


export const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        gsap.from(".menu", { duration: .3, x: '70px' })
    })


    return <nav className=' bg-background 
     py-3 px-10 relative border md:py-6  lg:py-8'>
        <article className=' container flex items-center justify-between mx-auto lg:px-40'>
            <div>
                <img src={logo} className=" w-[90px]" />
            </div>

            <button onClick={() => setToggle(!toggle)} className="md:hidden lg:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen} size={22} easing="ease-in" rounded />
                {/* <img src={Hamburger} className=" menu" /> */}

            </button>

            <div className=' hidden md:block lg:block'>
                <ul className=' font-inter tracking-tight flex gap-14 md:gap-6 md:text-sm '>
                    <li><a href="" className=' text-textGreen'>URL Shortener</a></li>
                    <li><a href="">Documentation</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">API</a></li>
                    <li><a href="" className=' py-3 px-6 rounded-full border-2 border-black md:py-3 hover:bg-textGreen hover:text-white hover:border-textGreen'>Sign in</a></li>
                </ul>
            </div>

        </article>
        {toggle && <article className=' absolute right-0 translate-y-3 px-14 z-20 py-10 bg-background/90 backdrop-blur-md border rounded-t-none rounded-lg shadow-xl shadow-gray-200/60 md:hidden lg:hidden menu'>
            <ul className=' font-inter tracking-tight flex flex-col gap-5 text-center z-50'>
                <li><a href="" className=' text-textGreen '>URL Shortener</a></li>
                <li><a href="">Documentation</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="" >API</a></li>
                <li><a href="" className=' py-3 px-6 rounded-full border-2 border-textGreen bg-textGreen text-white'>Sign in</a></li>
            </ul>
        </article>}


    </nav>
}
