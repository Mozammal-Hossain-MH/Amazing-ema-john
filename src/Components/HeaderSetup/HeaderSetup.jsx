import React from 'react';
import { Link } from 'react-router-dom';

const HeaderSetup = ({route}) => {
    return (
        <div className='md:text-white md:mr-4 text-center p-3 md:p-0 '>
            <Link className='hover:bg-red-500 px-2 py-1 rounded' to={route.path}>{route.name}</Link>
        </div>
    );
};

export default HeaderSetup;