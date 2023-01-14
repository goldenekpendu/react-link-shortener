import React from 'react'
import { InputField } from './InputField'
import meta from '../images/meta.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'

const Footer = () => {
    return (
        <div className=" font-inter tracking-tight">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,149.3C384,171,480,181,576,165.3C672,149,768,107,864,96C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className=' bg-darkBackground w-full pb-20 py-10 px-10  '>
                <h3 className=' font-bold text-2xl tracking-tight text-center text-background lg:text-4xl'>Try Sniply for free!</h3>
                <p className=' py-5 text-gray-300 max-w-md text-center mx-auto lg:max-w-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                <div className=' py-10'>
                    <InputField />
                </div>

                <div className=' flex items-center gap-10 justify-center pt-10 lg:gap-20 lg:pt-20'>
                    <img src={meta} className=" w-[12px]" />
                    <img src={linkedin} className=" w-[18px] " />
                    <img src={twitter} className=" w-[18px] " />
                    <img src={instagram} className=" w-[18px] " />
                </div>

            </div>
        </div>
    )
}

export default Footer