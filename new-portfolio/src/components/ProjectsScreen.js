import React, {useState, useEffect} from 'react';
import { Transition } from '@headlessui/react';
import Project from './Project';


const ProjectsScreen = () => {
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() => {
        setIsShowing(true);
    },[])

    return (
        <main className='bg-gray-100 min-h-screen p-12'>
            <section className='container mx-auto'>
            <h1 className='text-7xl flex justify-center cursive'>My Projects</h1>
            <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to my projects page!</h2>
                <Transition
                    appear={true}
                    show={isShowing}
                    enter='transition ease-in-out duration-300 transform'
                    enterFrom='translate-x-full'
                    enterTo='translate-x-0'
                    leave='transition ease-in-out duration-300 transform'
                    leaveFrom='translate-x-0'
                    leaveTo='translate-x-full'
            >
                <Project />
                </Transition>
            </section>
        </main>
     );
}

export default ProjectsScreen;
