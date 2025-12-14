import React from 'react';
import './ReviewsSection.css';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "Working with Werzio feels like a partnership; as we continued to use their services and found more opportunities, our business requests were quickly addressed.",
      author: "Ahmed Al-Rashid",
      position: "CEO, Optimus Properties",
      theme: "light"
    },
    {
      id: 2,
      rating: 5,
      text: "The team at Werzio transformed our digital presence completely. Their expertise in real estate marketing and web development is unmatched.",
      author: "Sarah Mitchell",
      position: "Marketing Director, Green Future",
      theme: "dark"
    },
    {
      id: 3,
      rating: 5,
      text: "Exceptional service and results. Werzio delivered a stunning website and comprehensive digital strategy that exceeded our expectations.",
      author: "Michael Thompson",
      position: "Founder, Hawk Dispatch",
      theme: "light"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="reviews-section">
      <div className="reviews-background-text">
        TESTIMONIALS
      </div>
      
      <div className="reviews-container">
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className={`review-card ${review.theme}`}>
              <div className="review-rating">
                {renderStars(review.rating)}
              </div>
              
              <div className="review-text">
                "{review.text}"
              </div>
              
              <div className="review-author">
                <div className="author-name">{review.author}</div>
                <div className="author-position">{review.position}</div>
              </div>
              
              <div className="quote-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;