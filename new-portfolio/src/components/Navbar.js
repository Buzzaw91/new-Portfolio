import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
    return (
        <header className='bg-gray-600 overflow-x-hidden'>
            <div className='container mx-auto flex justify-between'>
                <nav className="flex select-none">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-white"
                        className="inline-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-indigo-800 text-3xl md:text-4xl font-bold cursive tracking-widest transition ease-out duration-300"
                    >
                        Aleksi
                    </NavLink>

                    <NavLink
                        to="/post"
                        activeClassName="text-gray-100 bg-gray-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-sm md:text-base text-gray-200 hover:text-indigo-800 transition ease-out duration-300"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink
                        to="/project"
                        activeClassName="text-gray-100 bg-gray-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-sm md:text-base text-gray-200 hover:text-indigo-800 transition ease-out duration-300"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeClassName="text-gray-100 bg-gray-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-sm md:text-base text-gray-200 hover:text-indigo-800 transition ease-out duration-300"
                    >
                        About Me!
                    </NavLink>
            </nav>
            <div className='inline-flex py-3 px-3 my-6'>
                <SocialIcon url='https://www.linkedin.com/in/aleksi-ylonen/' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
                <SocialIcon url='https://github.com/Buzzaw91' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
            </div>
            </div>
        </header>
     );
}

export default Navbar;