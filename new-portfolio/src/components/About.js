import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import BlockContent from '@sanity/block-content-to-react';
import bgImg from '../images/compress-unsplash-min.jpg'
import { urlFor } from '../utils/builder';


const About = () => {
    const [author, setAuthor] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type=="author"] {
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    if(!author) return <div>Loading...</div>
    return (
        <main>
            <img src={bgImg} alt='backgroundImage' className='absolute w-full h-full object-cover' />
            <div className='p-10 lg:pt-48 container mx-auto relative'>
                <section className='bg-gray-600 rounded-lg shadow-2xl lg:flex p-20 opacity-95 select-none'>
                    <img src={urlFor(author.authorImage).width(800).height(800).url()} className='rounded-full w-32 h-32 lg:w-64 lg:h-64 mr-8' alt={author.name} />
                    <div className='text-lg flex flex-col justify-center'>
                        <h1 className='text-6xl cursive text-white mb-4'>
                            Hey there, I'm {" "}
                            <span className='text-indigo-100'>{author.name}</span>
                        </h1>
                        <div className='prose lg:prose-xl text-white'>
                            <BlockContent blocks={author.bio} projectId='zftb6ov9' dataset='production' />
                        </div>
                    </div>
                </section>
            </div>
        </main>
     );
}

export default About