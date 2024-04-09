'use client';

import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section id="testimonials" className="rev-section py-12">
      <div className="container mx-auto">
        <h2 className="title text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="note text-gray-500 mb-8">Our clients trust us to handle their important legal transactions.</p>
        <div className="reviews grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="review">
            <div className="head-review flex justify-center mb-4">
              <img src="/assets/reviews/avatar-1.png" alt="Client 1" className="w-24 h-24 rounded-full object-cover" />
            </div>
            <div className="body-review bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="name-review text-lg font-bold mb-2 text-black">John Smith</div>
              <div className="rating flex text-yellow-500 mb-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="desc-review text-gray-600 text-sm">"Valerie provided exceptional notarial services for my real estate transaction. Her expertise and attention to detail made the process seamless."</div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="review">
            <div className="head-review flex justify-center mb-4">
              <img src="/assets/reviews/avatar-2.png" alt="Client 2" className="w-24 h-24 rounded-full object-cover" />
            </div>
            <div className="body-review bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="name-review text-lg font-bold mb-2 text-black">Sarah Johnson</div>
              <div className="rating flex text-yellow-500 mb-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <div className="desc-review text-gray-600 text-sm">"I highly recommend VLT Solutions for their professional and efficient notarial services. Valerie was a pleasure to work with."</div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="review">
            <div className="head-review flex justify-center mb-4">
              <img src="/assets/reviews/avatar-3.png" alt="Client 3" className="w-24 h-24 rounded-full object-cover" />
            </div>
            <div className="body-review bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="name-review text-lg text-black font-bold mb-2">Michael Davis</div>
              <div className="rating flex text-yellow-500 mb-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="desc-review text-gray-600 text-sm">"Valerie's expertise in notarial services is unmatched. She helped me with my mortgage modification and made the process stress-free."</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;