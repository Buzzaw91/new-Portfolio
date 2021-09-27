// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import { SocialIcon } from 'react-social-icons';

const Project = () => {
    const [projectData, setProjectData] = useState(null)

    const capitalize = (str) => {
        return str.replace(/\b([a-z])/g, (w) => w.charAt(0).toUpperCase() + w.slice(1));
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == 'project']{
            title,
            date,
            description,
            projectType,
            link,
            tags,
            github
        }`).then((data) => setProjectData(data))
            .catch(console.error())
    }, []);

    return (
        <main className='bg-gray-100 min-h-screen p-12'>
            <section className='container mx-auto'>
                <h1 className='text-5xl flex justify-center cursive'>My Projects</h1>
                <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to my projects page!</h2>
                <section className='grid grid-cols-2 gap-8'>
                    {projectData && projectData.map((project, index) => (
                    <article className='relative rounded-lg shadow-xl bg-white p-16 border-l-8 border-gray-300 hover:shadow-2xl hover:bg-opacity-50 transition ease-out duration-300'>
                        <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-indigo-700 transition ease-out duration-300'>
                            <a
                            href={project.link}
                            alt={project.title}
                            target='_blank'
                            rel='noopener noreferrer'
                            >
                                {project.title}
                            </a>
                        </h3>
                        <div className='text-gray-500 text-xs space-x-4'>
                            <span>
                                <strong className='font-bold'>Finished on</strong>:{' '}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className='font-bold'>Type</strong>:{' '}
                                {capitalize(project.projectType)}
                            </span>
                            <span></span>
                            <p className='my-6 text-lg text-gray-700 leading-relaxed'>
                                {project.description}
                                </p>
                                <a
                                href={project.link}
                                rel='noopener noreferrer'
                                target='_blank'
                                className='text-indigo-500 font-bold hover:underline hover:text-indigo-800 text-base transition ease-out duration-300'
                                >
                                    View The Project{' '}
                                    <span role='img' aria-label='right pointer'>👉</span>
                                </a>
                                <span className='text-indigo-500 font-bold hover:underline hover:text-indigo-800 text-base transition ease-out duration-300'>View Code</span>
                                <SocialIcon url={project.github} className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}

export default Project;