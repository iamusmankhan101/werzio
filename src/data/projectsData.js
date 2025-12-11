// Device Components for illustrations
const TrackerDevice = () => (
  <div className="tracker-device">
    <div className="device-band"></div>
    <div className="device-screen"></div>
  </div>
);

const VRHeadset = () => (
  <div className="vr-headset">
    <div className="headset-body"></div>
    <div className="headset-strap"></div>
  </div>
);

const CameraDevice = () => (
  <div className="camera-device">
    <div className="camera-body"></div>
    <div className="camera-lens"></div>
  </div>
);

const ProductCollection = () => (
  <div className="product-collection">
    <div className="collection-items">
      <div className="item item-1"></div>
      <div className="item item-2"></div>
      <div className="item item-3"></div>
      <div className="item item-4"></div>
    </div>
  </div>
);

const SpatialDesign = () => (
  <div className="spatial-design">
    <div className="spatial-elements">
      <div className="element element-1"></div>
      <div className="element element-2"></div>
      <div className="element element-3"></div>
    </div>
  </div>
);

export const projectsData = {
  'tracker': {
    title: 'TRACKER',
    year: '2024',
    client: 'Fitness Solutions',
    services: 'Product Design, Branding, UI/UX',
    role: 'Lead Designer',
    description: [
      'A comprehensive fitness tracking solution that combines wearable technology with intuitive design. The project focused on creating a seamless user experience across multiple touchpoints.',
      'Our approach emphasized minimalist aesthetics while maintaining functionality, resulting in a product that appeals to both fitness enthusiasts and casual users.'
    ],
    images: [
      {
        type: 'placeholder',
        bgClass: 'bg-blue',
        component: TrackerDevice,
        size: 'hero'
      },
      {
        type: 'placeholder',
        bgClass: 'bg-gray',
        component: VRHeadset
      },
      {
        type: 'placeholder',
        bgClass: 'bg-light',
        component: CameraDevice
      },
      {
        type: 'placeholder',
        bgClass: 'bg-white',
        component: ProductCollection
      },
      {
        type: 'placeholder',
        bgClass: 'bg-mint',
        component: SpatialDesign
      }
    ],
    nextProject: {
      title: 'SPATIAL',
      description: 'Explore spatial design solutions that bridge physical and digital experiences.',
      link: 'spatial-case-study'
    }
  },
  
  'spatial': {
    title: 'SPATIAL',
    year: '2024',
    client: 'Tech Innovations',
    services: 'Spatial Design, AR/VR, Interactive Media',
    role: 'Creative Director',
    description: [
      'An immersive spatial design project that explores the boundaries between physical and digital spaces. We created interactive environments that respond to user presence and movement.',
      'The project combines cutting-edge technology with human-centered design principles to create meaningful spatial experiences.'
    ],
    images: [
      {
        type: 'placeholder',
        bgClass: 'bg-mint',
        component: SpatialDesign,
        size: 'hero'
      },
      {
        type: 'placeholder',
        bgClass: 'bg-purple',
        component: VRHeadset
      },
      {
        type: 'placeholder',
        bgClass: 'bg-orange',
        component: ProductCollection
      },
      {
        type: 'placeholder',
        bgClass: 'bg-pink',
        component: TrackerDevice
      }
    ],
    nextProject: {
      title: 'NEXUS',
      description: 'A digital platform connecting creative minds across the globe.',
      link: 'nexus-case-study'
    }
  },

  'nexus': {
    title: 'NEXUS',
    year: '2023',
    client: 'Digital Collective',
    services: 'Platform Design, UX Strategy, Brand Identity',
    role: 'Senior Designer',
    description: [
      'Nexus is a collaborative platform designed to connect creative professionals worldwide. The project focused on building meaningful connections through thoughtful design.',
      'We developed a comprehensive design system that scales across multiple touchpoints while maintaining consistency and usability.'
    ],
    images: [
      {
        type: 'placeholder',
        bgClass: 'bg-purple',
        component: ProductCollection,
        size: 'hero'
      },
      {
        type: 'placeholder',
        bgClass: 'bg-blue',
        component: TrackerDevice
      },
      {
        type: 'placeholder',
        bgClass: 'bg-orange',
        component: CameraDevice
      },
      {
        type: 'placeholder',
        bgClass: 'bg-mint',
        component: SpatialDesign
      }
    ],
    nextProject: {
      title: 'TRACKER',
      description: 'A comprehensive fitness tracking solution with intuitive design.',
      link: 'tracker-case-study'
    }
  }
};

export const getProjectData = (projectId) => {
  return projectsData[projectId] || null;
};