import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { MenuIcon } from '@heroicons/react/solid';


const MobileNav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    let menu = 'hidden flex container justify-between h-1/4 w-12';
    // 'transition-transform -translate-y-full duration-200 ease-in-out';

    const navToggleHandler = (e) => {
        e.preventDefault();
        console.log(`Before: isNavOpen: ${isNavOpen} menu: ${menu}`);
        if (!isNavOpen) {
            setIsNavOpen(true);
            menu = 'flex container justify-between h-1/4 w-12'
             console.log('After: ', isNavOpen, ' menu: ', menu)
        } else {
            setIsNavOpen(false);
             menu = 'hidden flex container justify-between h-1/4 w-12';
             console.log('After: ', isNavOpen, ' menu: ', menu)
        }
    }

    return (
        <header className='bg-gray-600 overflow-x-hidden'>
            <div className='container mx-auto flex justify-between mb-4'>
                <div onClick={(e) => navToggleHandler(e)}>
                <MenuIcon className='h-12 w-12 mt-4 ml-10 text-indigo-100'  />
                </div>
                <div className='inline-flex pt-6'>
                    <SocialIcon url='https://www.linkedin.com/in/aleksi-ylonen/' className='mr-5' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
                    <SocialIcon url='https://github.com/Buzzaw91' className='mr-5' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
                </div>
            </div>
            <nav className={`${isNavOpen ? menu : 'flex container justify-between h-1/4 w-12' }`}>
            <NavLink
                        to="/"
                        exact
                        activeClassName="text-white"
                        className="inline-flex items-center py-3 px-1 mr-4 ml-6 text-gray-100 hover:text-indigo-800 text-2xl font-bold tracking-widest transition ease-out duration-300"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/post"
                        activeClassName="text-gray-100 bg-gray-700"
                        className="inline-flex items-center py-1 px-1 my-3 mr-4 ml-6 rounded text-sm  text-gray-200 hover:text-indigo-800 transition ease-out duration-300"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink
                        to="/project"
                        activeClassName="text-gray-100 bg-gray-700"
                        className="inline-flex items-center py-1 px-1 my-3 mr-4 ml-6 rounded text-sm  text-gray-200 hover:text-indigo-800 transition ease-out duration-300"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeClassName="text-gray-100 bg-gray-700"
                        className="inline-flex items-center py-1 px-1 my-3 mr-4 ml-6 rounded text-sm  text-gray-200 hover:text-indigo-800 transition ease-out duration-300"
                    >
                        About Me!
                    </NavLink>
            </nav>
        </header>
     );
}

export default MobileNav;