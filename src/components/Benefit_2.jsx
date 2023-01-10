import React from 'react'
import divider from '../images/divider.svg'
import security from '../images/top-notch-security.svg'

import linkIcon from '../images/link-management.svg'
const Benefit2 = () => {
    return <article className=' py-8 px-10 rounded-md border border-darkBackground bg-darkBackground'>
        <div className=' flex items-center gap-x-5'>
            <img src={security} width={30} />
            <h6 className=' font-semibold text-sm tracking-tight capitalize text-textGreen lg:text-lg'>Top-notch Security</h6>
        </div>

        <p className=' text-sm tracking-tight max-w-md py-3 text-gray-300'>Lorem ipsum wetin be your own wahala i don taya for you. I wan learn this react wella make I work for tech company</p>

        <img src={divider} className=" py-5 opacity-50" />

        <h6 className=' font-semibold tracking-tight text-sm text-gray-200'>Popular Top-notch Security Features</h6>
    </article>
}


export default Benefit2
