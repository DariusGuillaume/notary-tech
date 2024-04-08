import React from 'react';
import { FaFastForward, FaShieldAlt, FaHeadset } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section service pt-24 pb-12" aria-label="service-label">
      <div className="container mx-auto">
        <p className="section-subtitle text-center mb-4" id="service-label">We provide the best services for your notarial needs</p>
        <h2 className="h2 section-title text-center mb-12">Our Services</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <li>
            <div className="service-card bg-white p-6 rounded-lg shadow-md">
              <div className="card-icon flex justify-center mb-4">
                <FaFastForward className="text-4xl text-primary" />
              </div>
              <h3 className="h4 card-title text-center mb-2">Fast Service</h3>
              <p className="card-text text-center">We provide fast and reliable notarial services to meet your deadlines.</p>
              <a href="#" className="btn-text block text-center mt-4">
                <span className="span">Learn More</span>
                <FaFastForward className="inline-block ml-2" />
              </a>
            </div>
          </li>

          <li>
            <div className="service-card bg-white p-6 rounded-lg shadow-md">
              <div className="card-icon flex justify-center mb-4">
                <FaShieldAlt className="text-4xl text-primary" />
              </div>
              <h3 className="h4 card-title text-center mb-2">Secure Transactions</h3>
              <p className="card-text text-center">We ensure the security and integrity of your notarized documents.</p>
              <a href="#" className="btn-text block text-center mt-4">
                <span className="span">Learn More</span>
                <FaFastForward className="inline-block ml-2" />
              </a>
            </div>
          </li>

          <li>
            <div className="service-card bg-white p-6 rounded-lg shadow-md">
              <div className="card-icon flex justify-center mb-4">
                <FaHeadset className="text-4xl text-primary" />
              </div>
              <h3 className="h4 card-title text-center mb-2">Personalized Support</h3>
              <p className="card-text text-center">We offer personalized support to guide you through the notarial process.</p>
              <a href="#" className="btn-text block text-center mt-4">
                <span className="span">Learn More</span>
                <FaFastForward className="inline-block ml-2" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;