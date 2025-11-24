import './FooterNew.css';

const FooterNew = () => {
  return (
    <footer className="footer-new">
      <div className="footer-container">
        {/* Left Side - Vertical Text */}
        <div className="footer-left">
          <h2 className="footer-vertical-text">Werzio Digital</h2>
        </div>

        {/* Center - Main Content */}
        <div className="footer-center">
          <div className="footer-main-text">
            <h3 className="footer-heading">
              Got a project, collaboration, or question? <span className="footer-link">Say hi!</span>
            </h3>
          </div>

          <div className="footer-links-grid">
            {/* Page Links */}
            <div className="footer-column">
              <h4 className="footer-column-title">links</h4>
              <ul className="footer-links-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#insights">Services</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-column">
              <h4 className="footer-column-title">Contact</h4>
              <ul className="footer-links-list">
                <li><a href="#contact">Contact</a></li>
                <li><a href="#404">404</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h4 className="footer-column-title">Contact info</h4>
              <ul className="footer-links-list">
                <li><a href="tel:+15588458889">+(558) 845 889</a></li>
                <li><a href="mailto:example@gmail.com">example@gmail.com</a></li>
                <li className="footer-address">Lahore, Pakistan</li>
              </ul>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="footer-bottom">
            <p className="footer-credits">2025©️ Werzio Digital</p>
            <div className="footer-social">
              <span className="footer-social-label">Follow us on:</span>
              <div className="footer-social-icons">
                <a href="#facebook" aria-label="Facebook">f</a>
                <a href="#instagram" aria-label="Instagram">📷</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
