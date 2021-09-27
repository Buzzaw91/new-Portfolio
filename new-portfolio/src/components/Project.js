// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import sanityClient from '../client';

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
            tags
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
                    <article className='relative rounded-lg shadow-xl bg-white p-16'>
                        <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-indigo-700'>
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
                                className='text-indigo-500 font-bold hover:underline hover:text-indigo-800 text-base'
                                >
                                    View The Project{' '}
                                    <span role='img' aria-label='right pointer'>👉</span>
                                </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}

export default Project;