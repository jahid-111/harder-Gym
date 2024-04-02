

import React, { useEffect, useState } from 'react';
import GymCard from './GymCard';
import Builder from './Builder';

const Main = () => {
    const [datas, setData] = useState([]);
    const [add, setCard] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then( res => res.json())
        .then( data => setData(data))
    }, []);


    const deliverFunc = (props) => {
        const newData = [...add, props];
        setCard(newData);
    }

    return (
        <div className='sm:flex mt-4 gap-2 justify-evenly'>
            <div className=' sm:w-9/12 sm:grid grid-cols-3 gap-3'>
                {
                   datas.map( data => <GymCard
                    deliverFunc ={deliverFunc}
                        key={data.id}
                        image= {data.image}
                        name={data.name}
                        text={data.text}
                        age={data.age}
                        time={data.time}
                   ></GymCard> )
                }
            </div>
            
            <div id='status' className=' relative user_Details rounded-md bg-yellow-600 text-white sm:w-3/12'>
                <Builder
                    cards = { add }
                ></Builder>
            </div>
           
        </div>
    );
};

export default Main;