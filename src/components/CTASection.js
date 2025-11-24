import { useState, useEffect, useRef } from 'react';
import './CTASection.css';
import img1 from '../images/pin/6b7d6434e4d611fc770ce1516b7ccf39.jpg';
import img2 from '../images/pin/17ab8d7fbf67aec9fbeff31585fb7b6a.jpg';
import img3 from '../images/pin/670273ffdc269b0f1e9f2f76b3893f66.jpg';
import img4 from '../images/pin/d79bad78b25fdfb0b72ce4fbc30e1c8d.jpg';
import img5 from '../images/pin/35c2372a2b2e2a141133dd0589ce7407.jpg';
import img6 from '../images/pin/59e599fd7537c21ead5028b9a56b76a5.jpg';
import img7 from '../images/pin/6b5ae26a5be8ecba75462571dc7cc33e.jpg';
import img8 from '../images/pin/753ad5b715214d05d5703edefac68165.jpg';
import img9 from '../images/pin/c62c9727029cb57942c3df4a2582adf6.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const CTASection = () => {
  const [visibleImages, setVisibleImages] = useState([]);
  const sectionRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const imageCount = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseEnter = () => {
      imageCount.current = 0;
      setVisibleImages([]);

      const interval = setInterval(() => {
        const imageIndex = imageCount.current % images.length;
        const randomOffset = 20;
        const offsetX = (Math.random() - 0.5) * randomOffset;
        const offsetY = (Math.random() - 0.5) * randomOffset;

        setVisibleImages(prev => [...prev, {
          img: images[imageIndex],
          x: mousePos.current.x + offsetX,
          y: mousePos.current.y + offsetY,
          id: `img-${Date.now()}-${Math.random()}`
        }]);
        imageCount.current++;
      }, 300);

      section.dataset.intervalId = interval;
    };

    const handleMouseLeave = () => {
      setVisibleImages([]);
      imageCount.current = 0;
      if (section.dataset.intervalId) {
        clearInterval(Number(section.dataset.intervalId));
      }
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseenter', handleMouseEnter);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseenter', handleMouseEnter);
      section.removeEventListener('mouseleave', handleMouseLeave);
      if (section.dataset.intervalId) {
        clearInterval(Number(section.dataset.intervalId));
      }
    };
  }, []);

  return (
    <section className="cta-section" ref={sectionRef}>
      {visibleImages.map((item) => (
        <div
          key={item.id}
          className="cta-cursor-image"
          style={{
            left: `${item.x}px`,
            top: `${item.y}px`
          }}
        >
          <div className="cta-image-placeholder">
            <img src={item.img} alt="Project preview" />
          </div>
        </div>
      ))}

      <div className="cta-container">
        <div className="cta-subtitle">
          <div className="cta-subtitle-wrapper">
            <span className="cta-subtitle-content">
              MAKE YOUR MOVE — MOVE YOUR MOUSE
            </span>
            <span className="cta-subtitle-content">
              MAKE YOUR MOVE — MOVE YOUR MOUSE
            </span>
          </div>
        </div>
        <h2 className="cta-title">
          Start your project<br />
          with Werzio<sup>®</sup>
        </h2>
        <a href="#contact" className="cta-button">
          Get in touch
          <span className="cta-arrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
