import './AboutUsSection.css';
import aboutImage from '../images/Untitled design (7).png';

const AboutUsSection = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        {/* Left Side - Image with Quote */}
        <div className="about-us-left">
          <img src={aboutImage} alt="About Us" className="about-us-bg-image" />
          <div className="about-us-quote-card">
            <p className="about-us-quote">
              "Great work doesn't happen by accident. It comes from listening closely, 
              challenging ideas, and obsessing over the details — that's what we do every day."
            </p>
            <div className="about-us-author">
              <p className="author-name">Otto Silva</p>
              <p className="author-title">Co-founder of Werzio</p>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="about-us-right">
          <p className="about-us-label">ABOUT US</p>
          <h2 className="about-us-heading">
            We're a hands-on digital agency building thoughtful solutions for ambitious brands.
          </h2>
          <p className="about-us-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse varius enim in eros elementum tristique. 
            Duis cursus, mi quis viverra.
          </p>
          <a href="#about" className="about-us-button">
            More about us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
