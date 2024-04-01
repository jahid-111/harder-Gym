

import React from 'react';

const GymCard = (props) => {
    const {image, name, text,time } = props


    return (
        <div className=' relative my-2 sm:my-0 rounded mx-auto text-white p-2 bg-amber-700'>
                <img className='rounded-md  mx-auto' src={image} alt="/Img" />

            <div className='-mb-5 sm:mb-0 h-44'>
                <h3 className='text-2xl'> {name}</h3>
                <p className='text-md'>{text.slice(0,100)}</p>
                <p className='text-xl'>{time}</p>
            </div>
            
        <button className='mt-4 py-2 absolute bottom-0 left-0 bg-amber-900 w-full'>Add to List</button>
        </div>
    );
};

export default GymCard;