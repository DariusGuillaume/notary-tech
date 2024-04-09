import React from 'react';
import { FaFastForward, FaShieldAlt, FaHeadset, FaHandshake } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section service pt-24 pb-12 bg-white dark:bg-navy-900" aria-label="service-label">
      <div className="container mx-auto">
        <p className="section-subtitle text-center text-2xl mb-4 text-muted-foreground dark:text-white" id="service-label">We provide the best services for your notarial needs</p>
        <h2 className="h2 section-title text-center text-4xl mb-12 text-foreground dark:text-white">Our Services</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <li>
            <div className="service-card bg-card dark:bg-card-dark p-6 rounded-lg shadow-md dark:shadow-none h-full flex flex-col items-center">
              <div className="card-icon flex justify-center mb-4">
                <FaFastForward className="text-4xl text-primary dark:text-white" />
              </div>
              <h3 className="h4 card-title text-center text-xl mb-2 text-card-foreground dark:text-white">Fast Service</h3>
              <p className="card-text text-center flex-grow text-muted-foreground dark:text-white">We provide fast and reliable notarial services to meet your deadlines.</p>
            </div>
          </li>
          <li>
            <div className="service-card bg-card dark:bg-card-dark p-6 rounded-lg shadow-md dark:shadow-none h-full flex flex-col items-center">
              <div className="card-icon flex justify-center mb-4">
                <FaShieldAlt className="text-4xl text-primary dark:text-white" />
              </div>
              <h3 className="h4 card-title text-center text-xl mb-2 text-card-foreground dark:text-white">Secure Transactions</h3>
              <p className="card-text text-center flex-grow text-muted-foreground dark:text-white">We ensure the security and integrity of your notarized documents.</p>
            </div>
          </li>
          <li>
            <div className="service-card bg-card dark:bg-card-dark p-6 rounded-lg shadow-md dark:shadow-none h-full flex flex-col items-center">
              <div className="card-icon flex justify-center mb-4">
                <FaHeadset className="text-4xl text-primary dark:text-white" />
              </div>
              <h3 className="h4 card-title text-center text-xl mb-2 text-card-foreground dark:text-white">Personalized Support</h3>
              <p className="card-text text-center flex-grow text-muted-foreground dark:text-white">We offer personalized support to guide you through the notarial process.</p>
            </div>
          </li>
          <li>
            <div className="service-card bg-card dark:bg-card-dark p-6 rounded-lg shadow-md dark:shadow-none h-full flex flex-col items-center">
              <div className="card-icon flex justify-center mb-4">
                <FaHandshake className="text-4xl text-primary dark:text-white" />
              </div>
              <h3 className="h4 card-title text-center text-xl mb-2 text-card-foreground dark:text-white">Trusted Expertise</h3>
              <p className="card-text text-center flex-grow text-muted-foreground dark:text-white">Our notary professionals have the expertise to handle your legal transactions.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;