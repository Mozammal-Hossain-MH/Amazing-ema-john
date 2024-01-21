import React from 'react';

const Link = ({route}) => {
    return (
        <div className='md:text-white md:mr-4 text-center p-3 md:p-0 '>
            <a className='hover:bg-red-500 px-2 py-1 rounded' href={route.path}>{route.name}</a>
        </div>
    );
};

export default Link;