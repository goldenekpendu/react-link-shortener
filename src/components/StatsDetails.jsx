import React from 'react'

export const StatsDetails = ({ number, text }) => {
    return (
        <div className=' font-inter tracking-tight flex items-center gap-5 py-3 border-b border-textGray last:border-none'>
            <h4 className=' text-textGreen text-3xl font-bold text-right lg:text-4xl'>{number}</h4>
            <p className=' text-background text-left lg:text-lg'>{text}</p>
        </div>
    )
}
