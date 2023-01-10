import React from 'react'
import Benefit1 from './Benefit_1'
import Benefit2 from './Benefit_2'
import Benefit3 from './Benefit_3'
import linkIcon from '../images/link-management.svg'

export const Benefits = () => {
    return <section className=' font-inter mt-20 px-10 lg:px-40 lg:mt-40'>
        <h3 className=' font-bold text-2xl tracking-tight text-center lg:text-4xl'>Sniply's Benefits</h3>
        <p className=' pt-5 text-center max-w-lg mx-auto text-sm text-textGray tracking-tight lg:text-lg lg:max-w-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti totam rem exercitationem facere ipsam dignissimos deserunt placeat veritatis debitis aut suscipit modi recusandae neque</p>

        <div className=' flex flex-col gap-10 my-10 md:flex md:flex-col md:mx-auto lg:flex-row justify-evenly lg:my-20'>
            <Benefit1 />
            <Benefit2 />
            <Benefit3 />
        </div>
    </section>
}
