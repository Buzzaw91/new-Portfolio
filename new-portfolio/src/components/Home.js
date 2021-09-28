import React from 'react';
import image from '../images/compress-unsplash-min.jpg'
const Home = () => {
    return (
        <main className=''>
            <img
                src={image}
                alt=''
                className='absolute object-cover w-screen h-screen'
                />
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 overflow-hidden'>
                <h1 className='text-indigo-100 font-bold cursive leading-none lg:leading-snug home-name select-none'>Hi! I'm Aleksi</h1>
            </section>
        </main>
     );
}

export default Home;