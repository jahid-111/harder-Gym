

import React from 'react';

const Header = () => {
    return (
        // <div className=' bg-amber-800 rounded-t-s-sm'>
        <div className=' px-3 text-white  bg-amber-800 rounded-tl-xl rounded-tr-none flex  justify-between'>
            <h3 className=' text-3xl  font-bold'>Harder Man</h3>
            <ul className=' font-semibold text-md flex gap-5 justify-center items-center'>
                <li><a className=' hover:text-yellow-500 hover:underline' href="#home">Home</a></li>
                <li><a className=' hover:text-yellow-500 hover:underline' href="#about">About</a></li>
                <li><a className=' hover:text-yellow-500 hover:underline' href="#status">Time Status</a></li>
            </ul>

        </div>
    );
};

export default Header;