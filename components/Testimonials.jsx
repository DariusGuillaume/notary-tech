import React, { useState, useEffect } from 'react';
import { firestore } from '../app/firebase/firebase';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { db, collection, getDocs, addDoc } from '../app/firebase/firebase';


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 0,
    description: '',
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const reviewsCollection = collection(db, 'reviews');
      const snapshot = await getDocs(reviewsCollection);
      const reviewsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(reviewsData);
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    }
  };
  const handleInputChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting review:", newReview);
      const reviewsCollection = collection(db, 'reviews');
      await addDoc(reviewsCollection, newReview);
      console.log("Review submitted successfully");
      setNewReview({ name: '', rating: 0, description: '' });
      fetchReviews();
    } catch (error) {
      console.error('Failed to submit review:', error);
      alert("Failed to submit the review. Please try again.");
    }
  };
  return (
    <section id="testimonials" className="rev-section py-12">
      <div className="container mx-auto">
        <h2 className="title text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="note text-gray-500 mb-8">Our clients trust us to handle their important legal transactions.</p>

        <div className="reviews grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="review">
              <div className="body-review bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="name-review text-lg font-bold mb-2 text-black">{review.name}</div>
                <div className="rating flex text-yellow-500 mb-2">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  {review.rating % 1 !== 0 && <FaStarHalf />}
                </div>
                <div className="desc-review text-gray-600 text-sm">{review.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Leave a Review</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newReview.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="rating" className="block mb-2">Rating</label>
              <select
                id="rating"
                name="rating"
                value={newReview.rating}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a rating</option>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block mb-2">Description</label>
              <textarea
                id="description"
                name="description"
                value={newReview.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;