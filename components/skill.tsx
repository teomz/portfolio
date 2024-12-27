
'use client'
import React from 'react'
import Image from 'next/image'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';


export default function Skills() {
    const {ref} = useSectionInView('Skills');

  return (
    <section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40' ref = {ref} id='skills'
    >
        <SectionHeading>My skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-4'>
            <li className="flex justify-center items-center mr-4"><a href="https://git-scm.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="36" height="36" alt="Git" /></a></li>
            <li className="flex justify-center items-center mr-4"><a href="https://go.dev/doc/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg" width="36" height="36" alt="Go" /></a></li>
            <li className="flex justify-center items-center mr-4"><a href="https://www.python.org/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" width="36" height="36" alt="Python" /></a></li>
            <li className="flex justify-center items-center mr-4"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a></li>
            <li className="flex justify-center items-center mr-4"><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a></li>
            <li className="flex justify-center items-center mr-4"><a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a></li>
            <li className="flex justify-center items-center mr-4"><a href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="36" height="36" alt="NextJs" /></a></li>
            <li className="flex justify-center items-center mr-4"><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" /></a></li>
            <li className="flex justify-center items-center mr-4"><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a></li>
            <li className="flex justify-center items-center mr-4"><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a></li>
            <li className="flex justify-center items-center mr-4"><a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a></li>
            <li className="flex justify-center items-center mr-4"><a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="36" height="36" alt="PostgreSQL" /></a></li>
            <li className="flex justify-center items-center mr-4"><a href="https://flask.palletsprojects.com/en/2.0.x/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flask-colored.svg" width="36" height="36" alt="Flask" /></a></li>
            <li className="flex justify-center items-center mr-4"><a href="https://www.credly.com/badges/160eef37-28dc-48bb-a10c-a40c3250b86b/public_url" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aws-colored.svg" width="36" height="36" alt="Amazon Web Services" /></a></li>
            <li className="flex justify-center items-center mr-4"><a href="https://www.docker.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg" width="36" height="36" alt="Docker" /></a></li>
            <li className="flex justify-center items-center mr-4"><a href="https://www.linux.org" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg" width="36" height="36" alt="Linux" /></a></li>
            <li className="flex justify-center items-center mr-4"><a href="https://pytorch.org/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/pytorch-colored.svg" width="36" height="36" alt="PyTorch" /></a></li>
            <li className="flex justify-center items-center mr-4"><a href="https://www.tensorflow.org/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tensorflow-colored.svg" width="36" height="36" alt="TensorFlow" /></a></li>
        </ul>
    </section>
  )
}
