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
        }`).then((data) => data.reverse())
        .then((data) => setProjectData(data))
            .catch(console.error())
    }, []);

    return (
    <>

                <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {projectData && projectData.map((project, index) => (
                    <article className='relative rounded-lg shadow-xl bg-gradient-to-r from-white to-gray-300 p-8 md:p-16 border-l-8 border-indigo-700 hover:shadow-2xl hover:bg-opacity-50 transition ease-out duration-300'>
                        <h3 className='md:max-w-xs text-gray-800 text-5xl md:text-6xl font-bold mb-2 hover:text-indigo-700 transition ease-out duration-300 cursive pb-2 transform hover:scale-105'>
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
                                <strong className='font-bold block md:inline-block'>Finished on</strong>:{' '}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className='font-bold block md:inline-block mt-2 md:mt-0'>Type</strong>:{' '}
                                {capitalize(project.projectType)}
                            </span>
                            <span>
                                <p className='my-8 text-sm md:text-lg text-gray-700 leading-relaxed'>
                                    {project.description}
                                    </p>
                                <div className='flex'>
                                    <a
                                    href={project.link}
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    className='text-gray-500 font-bold hover:underline hover:text-indigo-800 text-base transition ease-out duration-300'
                                    >
                                        View The Project{' '}
                                        <span role='img' aria-label='right pointer'>👉</span>
                                    </a>
                                    <a
                                    href={project.github}
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    className='text-gray-500 pl-6 font-bold hover:underline hover:text-indigo-800 text-base transition ease-out duration-300'>View Code</a>
                                    <SocialIcon url={project.github} className='mr-4 ml-4' target='_blank' fgColor='#fff' style={{height: 30, width: 30}} />
                                </div>
                            </span>
                        </div>
                    </article>
                    ))}
                </section>
    </>
    )
}

export default Project;