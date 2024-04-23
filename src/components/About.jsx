import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <div
        className={` inset-0  mx-auto  flex flex-row items-start gap-5`}
      >
      <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-40 h-10 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Sushmita Halasawade</span>
          </h1>
        
        </div>
        </div>
      </motion.div>
{/* <motion.div variants={textVariant()}>
<div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Sushmita Halasawade</span>
          </h1>
        
        </div>
      </div>
      </motion.div> */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]'
      >
        With four years of professional experience in fintech, I'm currently pursuing  MS in Information Technology with a focus on Information Systems Management at Arizona State University.
        As a seasoned software developer specializing in full-stack development, machine learning, and cloud technologies, I bring a wealth of experience and expertise to the table. 
        I thrive on challenges, consistently delivering efficient, scalable, and user-friendly solutions by closely collaborating with clients. My dedication and passion drive me to achieve excellence in every endeavor.
        If you believe my skill set aligns with your company's needs, feel free to connect. I'm actively seeking full-time opportunities for Summer 2024 and look forward to contributing to your team's success.
      </motion.p>
      <motion.div  variants={fadeIn("", "", 0.1, 1)}>
      <div><ul className='mt-4 list-disc ml-5 space-y-2'>
          <li className='text-secondary  text-[15px] pl-1 tracking-wider'>
            Programming Languages: Java, Python, C#, ASP.Net, JavaScript, C/C++, SQL, Scala, R, HTML5, CSS3
          </li>
          <li className='text-secondary  text-[15px] pl-1 tracking-wider'>
          Frameworks: Spring Boot, Flask, FastAPI, Node.js, Express.js, React, Spark, Pandas, JUnit, Scikit-learn, PyTorch, Tensorflow, Matplotlib
           </li>
          <li className='text-secondary  text-[15px] pl-1 tracking-wider'>
          Tools and Databases: MySQL, MongoDB, Couchbase, Docker, Kubernetes, Apache Kafka, RabbitMQ, Databricks,
Delta Lake, Norma tool, Apache Airflow, Power BI, Tableau, Selenium, Git, Jira</li>
          <li className='text-secondary  text-[15px] pl-1 tracking-wider'>
          Cloud Platforms: Amazon Web Services (AWS), Microsoft Azure
     </li>
   
      </ul></div>  </motion.div>
      <div className='mt-10 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");