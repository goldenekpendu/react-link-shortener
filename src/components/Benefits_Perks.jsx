import React from 'react'
import arrowRight from '../images/arrowcircleright.svg'

export const Benefits_Perks = ({ text }, ...props) => {
    return <div className=' py-1 flex items-center gap-4'>
        <img src={arrowRight} />
        <p {...props} className=" text-gray-200 text-sm tracking-tight">{text}</ p>
    </div>
}

Benefits_Perks.defaultProps = {
    text: 'Lorem ipsum'
}
