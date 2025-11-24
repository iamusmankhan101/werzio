import React, { useState, useEffect, useRef } from 'react';
import './AboutSection.css';

const AboutSection = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionHeight = section.offsetHeight;

            // Calculate scroll progress through the section
            // Section is pinned when top reaches 0
            if (rect.top <= 0 && rect.bottom >= windowHeight) {
                const scrolled = Math.abs(rect.top);
                const totalScroll = sectionHeight - windowHeight;
                const progress = Math.min(1, Math.max(0, scrolled / totalScroll));
                setScrollProgress(progress);
            } else if (rect.top > 0) {
                setScrollProgress(0);
            } else if (rect.bottom < windowHeight) {
                setScrollProgress(1);
            }
        };

        // Use requestAnimationFrame for smoother animation
        let ticking = false;
        const smoothHandleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', smoothHandleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', smoothHandleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="about-section" style={{ minHeight: '300vh' }}>
            <div
                className="about-sticky-container"
                style={{
                    transform: `translate(-50%, -50%) scale(${1 - scrollProgress * 0.98})`,
                    borderRadius: `${scrollProgress * 50}px`,
                    left: '50%',
                    top: '50%'
                }}
            >
                <div
                    className="about-container"
                    style={{
                        opacity: 1 - scrollProgress
                    }}
                >
                    {/* Left Content */}
                    <div className="about-left">
                        <h2 className="about-heading">
                            Whatever<br />
                            You Imagine
                        </h2>
                        <p className="about-description">
                            At InspireX, We Are A Dynamic Team Of Creative Professionals
                            Dedicated To Delivering Innovative Solutions. With A Passion
                            For Excellence And A Commitment To Understanding Our
                            Clients' Unique Needs.
                        </p>
                    </div>

                    {/* Right Content */}
                    <div className="about-right">
                        <h2 className="about-tagline">
                            We Design!
                        </h2>
                    </div>
                </div>

                {/* Orange overlay that appears on scroll */}
                <div
                    className="about-orange-overlay"
                    style={{
                        opacity: scrollProgress
                    }}
                ></div>
            </div>
        </section>
    );
};

export default AboutSection;
