import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { MenuIcon } from '@heroicons/react/solid';
import { Transition } from '@headlessui/react';


const MobileNav = () => {
    const [isShowing, setIsShowing] = useState(false);




    return (
    <>
        <header className='bg-gray-600 overflow-x-hidden'>
            <div className='container mx-auto flex justify-between mb-4'>
                <div onClick={() => setIsShowing((isShowing) => !isShowing)}>
                <MenuIcon className='h-12 w-12 mt-4 ml-10 text-indigo-100'  />
                </div>
                <div className='inline-flex pt-6'>
                    <SocialIcon url='https://www.linkedin.com/in/aleksi-ylonen/' className='mr-5' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
                    <SocialIcon url='https://github.com/Buzzaw91' className='mr-5' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
                </div>
            </div>
        </header>

        <div className='bg-gray-600 z-200'>
            <Transition as='nav'
                className='max-width-6xl '
                show={isShowing}
                enter='transition-opacity duration 250'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity duration 250'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                >
            <nav
            className='flex container justify-between'>
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
            </Transition>
        </div>
    </>
     );
}

export default MobileNav;