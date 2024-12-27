"use client";

import React from 'react';
import SectionHeading from './section-heading';
import {motion} from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {

  const {ref} = useSectionInView('About');

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id = 'about'
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="spaced-text text-lg gap-4">
        — an enthusiastic software engineer and data engineer based in Singapore🌍.  
        I have a passion for machine learning and data engineering, focusing on optimizing training and deployment processes, 
        designing efficient data pipelines, and driving innovation in AI and data-driven fields 🤖🔧. 
        My goal is to contribute to impactful projects while continuously learning and growing in my profession. 
        🧠 Currently, I am learning Golang and Typescript to further expand my skill set.
      </p>
    </motion.section>
  );
}
