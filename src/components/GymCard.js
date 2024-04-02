

import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const GymCard = (props) => {
    const {deliverFunc, image, name, text, age, time } = props;

    return (
        <div className=' relative my-2 h-auto sm:my-0 rounded mx-auto text-white p-2 bg-amber-700'>
                <img className='rounded-md  mx-auto' src={image} alt="/Img"/>
            <div className=' sm:mb-0 h-44'>
                <h3 className='text-2xl'> {name}</h3>
                <p className='text-md'>{text.slice(0,100)}</p>
                <p className='text-md'> For age : {age}</p>
                
                <p className='text-xl'> Time Rwquired : {time}</p>
            </div>
        <button onClick={ ()=>{deliverFunc(props)}} className='mt-4 py-2 absolute bottom-0 left-0 bg-amber-900 hover:border-t-2 hover:bg-amber-700 w-full'> 
            <span className='me-3 font-semibold'>Add to List </span>
            <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
        </button>
        </div>
    );
};

export default GymCard;