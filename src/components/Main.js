

import React, { useEffect, useState } from 'react';
import GymCard from './GymCard';

const Main = () => {

    const [datas, setData] = useState([]);
    console.log(datas)
    useEffect( ()=>{

        fetch('data.json')
        .then( res => res.json())
        .then( data => setData(data))
    }, [])


    return (
        <div className='sm:flex'>
            <div className=' sm:w-9/12 sm:grid grid-cols-3 gap-3'>
                {
                   datas.map( data => <GymCard
                        key={data.id}
                        image= {data.image}
                        name={data.name}
                        text={data.text}
                        time={data.time}
                
                   ></GymCard> )
                }


            </div>
      


            <div className='user_Details w-3/12'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui illum, magni asperiores cupiditate ex accusantium saepe! Sint quas eaque quos? Sequi architecto earum minus corporis expedita distinctio, nam eveniet deserunt?</p>
            </div>
           
        </div>
    );
};

export default Main;