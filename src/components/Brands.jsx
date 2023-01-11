import React from 'react'
import deliveroo from '../images/deliveroo_gray_1.png'
import discord from '../images/discord_gray_1.png'
import ea from '../images/ea_gray_1.png'
import nestle from '../images/nestle-logo_1.png'
import dividerDesktop from '../images/divider_desktop.svg'


const Brands = () => {
    return <section className=' font-inter'>
        <img src={dividerDesktop} className=" py-10 max-w-xs mx-auto md:max-w-lg lg:max-w-3xl" />
        <h3 className=' font-bold text-2xl tracking-tight text-center max-w-xs mx-auto pb-5 md:max-w-none lg:text-4xl'>Loved by small and big brands everywhere</h3>
        <div className=' flex flex-col gap-4 justify-center items-center py-5 md:flex-row '>
            <img src={discord} className=" w-[200px] md:w-[130px]" />
            <img src={ea} className=" w-[200px] md:w-[130px]" />
            <img src={nestle} className=" w-[200px] md:w-[130px]" />
            <img src={deliveroo} className=" w-[200px] md:w-[130px]" />


        </div>
        <img src={dividerDesktop} className=" py-10 max-w-xs mx-auto md:max-w-lg lg:max-w-3xl" />

    </section>
}

export default Brands