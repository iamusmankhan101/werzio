import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ApproachSection.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ApproachSection = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const triggerRef = useRef(null);

  const steps = [
    {
      id: 1,
      number: 'Step 01',
      title: 'Research',
      description: 'Discover user needs and analyze competitors to gain insights and identify opportunities for innovation.'
    },
    {
      id: 2,
      number: 'Step 02',
      title: 'Strategy',
      description: 'Define project goals, map a clear direction, and establish a roadmap that aligns with the brand vision.'
    },
    {
      id: 3,
      number: 'Step 03',
      title: 'Design',
      description: 'Create engaging visuals and user-friendly experiences that balance creativity with functionality.'
    },
    {
      id: 4,
      number: 'Step 04',
      title: 'Launch & Refine',
      description: 'Incorporating feedback, ensuring quality, and handing off developer-ready files and documentation.'
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    const trigger = triggerRef.current;

    if (!section || !cardsContainer || !trigger) return;

    // Get all card elements
    const cards = cardsContainer.children;
    
    // Calculate scroll distance
    const scrollDistance = 200; // 200vh for the animation

    // Create GSAP timeline for stacked to 4-column grid animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: () => `+=${scrollDistance}vh`,
        scrub: 1,
        pin: section,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    // Define 4-column grid positions with even spacing
    const gridPositions = [
      { x: "12.5%", y: "50%" },   // Card 1: Left (12.5% from edge)
      { x: "37.5%", y: "50%" },   // Card 2: Center-left 
      { x: "62.5%", y: "50%" },   // Card 3: Center-right
      { x: "87.5%", y: "50%" }    // Card 4: Right (12.5% from edge)
    ];

    // Animate each card from stacked center to grid position
    Array.from(cards).forEach((card, index) => {
      const position = gridPositions[index];
      
      tl.to(card, {
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        ease: "power2.out",
        duration: 1
      }, 0); // Start all animations at the same time
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [steps.length]);

  return (
    <div ref={triggerRef}>
      <section className="approach-section" ref={sectionRef}>
        <div className="approach-sticky-container">
          {/* Header */}
          <div className="approach-header">
            <div className="approach-header-left">
              <span className="approach-label">● Process</span>
              <h2 className="approach-title">Approach</h2>
            </div>
          </div>

          {/* Horizontal Scrolling Cards */}
          <div className="approach-cards-viewport">
            <div className="approach-cards-container" ref={cardsContainerRef}>
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  className="approach-step-card horizontal-card"
                >
                  <span className="step-number">{step.number}</span>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApproachSection;
