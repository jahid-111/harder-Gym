

import React, { useState } from 'react';
// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock, faInfoCircle, faMapMarker,  } from '@fortawesome/free-solid-svg-icons';
import { addDB, getDB } from '../utilities/Storage';
const Builder = ( props ) => {
    const { cards }  =  props;
    let time ="00";
    for (const card of cards) {
        time = parseFloat(time) + parseFloat(card.time);
    }
    const breakTimes = [ 10, 15,30, 35];
    const [breaks, setBreak] = useState("00");
    const breakAdd = (time) => {
        addDB(time); //set direct LS
        const existTime = JSON.parse(getDB())
        setBreak(existTime.time);
    }
    
    return (
        <div className='components top-0 sticky'>
            <section className='user-Info'>
                <div className='flex justify-start gap-5 m-4 items-center'>
                    <img className=' h-16 w-16 rounded-full bg-slate-300' src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" alt="" />
                    <div>
                        <h3 className=' text-2xl'>Mohd. Jahidul Islam</h3>
                        <p className=' text-xl'> <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon> Bangladesh</p>
                    </div>
                </div>
    <hr/>
                <div className=' bg-amber-600 my-3 mx-2 rounded-md flex justify-between items-center px-4'>
                    <div className=' rounded-md py-2'>
                          <p className=' text-2xl'>75.00<span className=' text-sm'>KG</span></p>
                          <h5 className='text-xl'>Weight</h5>
                    </div>
                    <div className=' rounded-md py-2'>
                          <p className=' text-2xl'>175.00<span className=' text-sm'>C.M</span></p>
                          <h5 className='text-xl'>Height</h5>
                    </div>
                    <div className=' rounded-md py-2'>
                          <p className=' text-2xl'>27<span className=' text-sm'>Yrs</span></p>
                          <h5 className='text-xl'>Age</h5>
                    </div>
                </div>
            </section>
            
            <section className='mt-5'>
                <h2 className=' text-center font-semibold -mb-2 text-2xl mx-4'> <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> <span className='ms-2'>Add a Brerak</span></h2>
                <div className=' bg-amber-600 py-4 my-3 mx-2 rounded-md flex justify-between items-center px-4'>
                    {
                        breakTimes.map( breakTime =>    <button onClick={ ()=>{breakAdd(breakTime)}} className=' font-bold rounded-full py-4 px-6 bg-amber-900  hover:bg-amber-700'
                        >{breakTime}
                        </button> )
                    }
                </div>
            </section>

            <section className=' mt-4 px-3  '>
                <h3 className='text-center font-semibold -mb-2 text-2xl mx-4' >
                    <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
                    <span className='ms-2'> Exercise Details</span>
                </h3>

                <div className=' gap-2 flex flex-col mt-3'>
                    <div className=' h-10 px-2  rounded-md flex justify-between items-center text-2xl  bg-slate-400'>
                        <p>Exercise Time : </p>
                        <h5 >{time}  <span className='ms-3'>Seconds</span> </h5>
                    </div>
                    <div className=' h-10 px-2  rounded-md  flex justify-between items-center text-2xl  bg-slate-400'>
                        <p>Break time :  </p>
                        <h5>{breaks} <span className='ms-3'>Seconds</span></h5>
                    </div>
                </div>

                    <button className=' mt-5 rounded-md mx-auto py-2 text-2xl font-bold bg-amber-900 hover:bg-amber-700 w-full'>
                        Add Completed  
                    </button>
            </section>
        </div>
    );
};

export default Builder;