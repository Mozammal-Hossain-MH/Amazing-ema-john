import React, { useEffect, useState } from 'react';
import logo from '../../images/Logo.svg'
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    const [routes, setRoutes] = useState([]);

    console.log(open)

    useEffect(() => {
        fetch('/header.json')
            .then(res => res.json())
            .then(data => setRoutes(data));
    }, [])

    

    return (
        <nav className='h-20 flex justify-between items-center' style={{ background: '#1c2b35', boxShadow: '0 4px 10px rgba(110, 110, 110, 0.68)' }}>
            <img className='md:ml-28 ml-10' src={logo} />

            <div>
                <div className='md:hidden mr-10' onClick={() => setOpen(!open)}>
                    <span>{
                        
                        open === true ?
                            (<XMarkIcon className="h-10 w-10 text-white " />)
                            : (<Bars3Icon className="h-10 w-10 text-white" />)
                    }
                    </span>
                </div>

                <div className={` md:flex md:mr-20 absolute md:static bg-red-400 md:bg-inherit duration-100 md:duration-0 w-full h-auto z-50 ${open ? 'top-20 right-0 ' : '-top-48 right-0'}`}>
                    {
                        routes.map(route => <Link
                            key={route.id}
                            route={route}
                        ></Link>)
                    }
                </div>

            </div>
        </nav>
    );
};

export default Header;