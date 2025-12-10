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
              "The best results emerge when we treat a client's challenge as our own. We partner with visionary brands to turn complexity into intuitive, elegant solutions."
            </p>
            <div className="about-us-author">
              <p className="author-name">UK</p>
              <p className="author-title">Founder of Werzio</p>
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
            We believe in deep collaboration and an iterative approach to problem-solving. Our mission is to transform ambitious ideas into impactful digital realities, leveraging cutting-edge technology and human-centered design to drive sustainable growth for our partners.
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
