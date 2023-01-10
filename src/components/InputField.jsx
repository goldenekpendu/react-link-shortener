import React from 'react'

export const InputField = () => {
    return <form action="" className=' font-inter flex flex-col gap-4 max-w-lg md:max-w-xl lg:max-w-3xl mx-auto md:flex-row md:justify-center'>
        <div className=' bg-gray-50 py-3 rounded-full border border-textGreen overflow-hidden px-8 lg:py-6 lg:px-10 focus:ring-2 focus:ring-textGreen'>
            <input type="text" placeholder='your long link goes here' className=' placeholder:font-extralight placeholder:italic bg-transparent outline-none text-textGray lg:w-[350px]' />
        </div>
        <button type="submit" className=' py-4 px-6 rounded-full text-white font-bold bg-gradient-to-br from-textGreen via-textGreen to-teal-300 hover:bg-black hover:shadow-xl hover:shadow-gray-50 tracking-tight lg:px-10'>Shorten URL</button>

    </form>
}
