import React from 'react'
import arrowRight from '../images/arrowcircleright.svg'

export const Benefits_Perks2 = ({ text }, ...props) => {
    return <div className=' py-1 flex items-center gap-4'>
        <img src={arrowRight} />
        <p {...props} className=" text-textGray text-sm tracking-tight">{text}</ p>
    </div>
}

Benefits_Perks2.defaultProps = {
    text: 'Lorem ipsum'
}
