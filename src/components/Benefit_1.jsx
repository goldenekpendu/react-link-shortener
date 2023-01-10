import React from 'react'
import divider from '../images/divider.svg'
import linkIcon from '../images/link-management.svg'
const Benefit1 = () => {
    return <article className=' py-8  px-10 rounded-md border'>
        <div className=' flex items-center gap-x-5'>
            <img src={linkIcon} width={30} />
            <h6 className=' font-semibold text-sm tracking-tight capitalize lg:text-lg'>Link Management</h6>
        </div>

        <p className=' text-textGray text-sm tracking-tight max-w-md py-3'>Lorem ipsum wetin be your own wahala i don taya for you. I wan learn this react wella make I work for tech company</p>

        <img src={divider} className=" py-5" />

        <h6 className=' font-semibold tracking-tight text-sm'>Popular Link Management Features</h6>


    </article>
}



export default Benefit1
