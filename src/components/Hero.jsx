import React from 'react'
import { InputField } from './InputField'
import activityIcon from '../images/activity.svg'
import link from '../images/link2.svg'

export const Hero = () => {
    return (
        <section className=' px-10 relative w-full overflow-hidden'>
            <h2 className=' font-inter font-extrabold text-3xl tracking-tight text-headerGray text-center max-w-lg mx-auto py-20 md:max-w-xl lg:text-5xl lg:max-w-4xl lg:mt-20 lg:leading-tight'>Get better clickthrough rates with <span className=' text-textGreen'>shortened, customized URLs.</span></h2>
            <InputField />

            <p className=' font-inter text-textGray text-sm text-center tracking-tight pt-20 max-w-md mx-auto pb-20'>By clicking SHORTEN URL, you are agreeing to Sniply's <span className=' text-textGreen'>Term's of Service, Privacy Policy </span>and <span className=' text-textGreen'>Acceptable Use Policy</span></p>
            <div className=' -z-10'>
                <img src={activityIcon} className=" absolute -right-10 w-[120px]" />
                <img src={link} className=" absolute top-80 -left-10 w-[120px] " />

            </div>
        </section>
    )
}
