import React, { useEffect, useRef, useState } from 'react';
import './ReviewsSection.css';

const ReviewsSection = () => {
  const scrollTextRef = useRef(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTextRef.current && isInView) {
        const scrolled = window.pageYOffset;
        const sectionTop = sectionRef.current?.offsetTop || 0;
        const sectionHeight = sectionRef.current?.offsetHeight || 0;
        const sectionBottom = sectionTop + sectionHeight;
        
        if (scrolled >= sectionTop - window.innerHeight && scrolled <= sectionBottom) {
          const relativeScroll = scrolled - (sectionTop - window.innerHeight);
          const rate = relativeScroll * -0.8;
          scrollTextRef.current.style.transform = `translateX(${rate}px)`;
        }
      }
    };

    if (isInView) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInView]);

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
    <section className="reviews-section" ref={sectionRef}>
      <div className="reviews-background-text">
        TESTIMONIALS
      </div>
      
      <div className="scrolling-text" ref={scrollTextRef}>
        <span>CLIENT TESTIMONIALS • REVIEWS • FEEDBACK • CLIENT TESTIMONIALS • REVIEWS • FEEDBACK • </span>
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