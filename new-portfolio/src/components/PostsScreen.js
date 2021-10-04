import React, { useState, useEffect} from 'react';
import { Transition } from '@headlessui/react';
import Post from './Post';

const PostsScreen = () => {
    const [isShowing, setIsShowing] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsShowing(true);
        }, 300)
    }, []);

    return (
        <main className="bg-gray-100 min-h-screen p-12">
            <section className="container mx-auto">
            <h1 className="text-5xl flex justify-center cursive">My Blog Posts Page!</h1>
            <h2 className="text-lg text-gray-600 flex justify-center mb-12">
            Welcome to my page of blog posts
            </h2>
            <Transition
                show={isShowing}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
            >
                <Post />
            </Transition>
            </section>
        </main>
     );
}

export default PostsScreen;