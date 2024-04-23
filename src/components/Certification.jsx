import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Certification } from "../constants";

const CertificationCard = ({ index, title, icon, link }) => (
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
           
            <div
              onClick={() => window.open(link, "_blank")}
              className='w-25 h-25  flex justify-center items-center cursor-pointer'
            >
               <img
            src={icon}
            alt='web-development'
            className='w-25 h-25 object-contain'
          />
            </div>
         
  
          <h3 className='text-white text-[14px] text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );

const Certifications = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[100px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I've achieved</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>
      <div className=' flex flex-wrap gap-10'>
        {Certification.map((certificate, index) => (
          <CertificationCard key={certificate.title} index={index} {...certificate} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "Certification");