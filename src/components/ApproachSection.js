import './ApproachSection.css';

const ApproachSection = () => {
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

  return (
    <section className="approach-section">
      <div className="approach-container">
        {/* Header */}
        <div className="approach-header">
          <div className="approach-header-left">
            <span className="approach-label">● Process</span>
            <h2 className="approach-title">Approach</h2>
          </div>
          <div className="approach-header-right">
            <a href="#work" className="approach-button">
              View All Work
              <span className="approach-button-arrow">→</span>
            </a>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="approach-steps">
          {steps.map((step) => (
            <div key={step.id} className="approach-step-card">
              <span className="step-number">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
