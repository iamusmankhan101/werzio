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
  'optimus': {
    title: 'OPTIMUS',
    year: '2024',
    client: 'Optimus Technologies',
    services: 'Brand Identity, Web Design, Digital Strategy',
    role: 'Creative Director',
    description: [
      'A comprehensive rebranding project for Optimus Technologies, focusing on modernizing their digital presence while maintaining their core values of innovation and reliability.',
      'We developed a cohesive brand system that spans across all digital touchpoints, creating a unified experience that resonates with their target audience.'
    ],
    images: [
      {
        type: 'placeholder',
        bgClass: 'bg-blue',
        component: ProductCollection,
        size: 'hero'
      },
      {
        type: 'placeholder',
        bgClass: 'bg-gray',
        component: TrackerDevice
      },
      {
        type: 'placeholder',
        bgClass: 'bg-mint',
        component: SpatialDesign
      },
      {
        type: 'placeholder',
        bgClass: 'bg-white',
        component: VRHeadset
      }
    ],
    nextProject: {
      title: 'GREENFUTURE',
      description: 'Sustainable solutions for a better tomorrow.',
      link: 'greenfuture-case-study'
    }
  },

  'greenfuture': {
    title: 'GREENFUTURE',
    year: '2024',
    client: 'Green Future Partnership',
    services: 'Environmental Design, Sustainability Consulting, Digital Platform',
    role: 'Lead Designer',
    description: [
      'Green Future Partnership needed a digital platform to showcase their environmental initiatives and connect with eco-conscious communities worldwide.',
      'Our solution emphasized clean, nature-inspired design elements while ensuring accessibility and user engagement across all demographics.'
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
        bgClass: 'bg-light',
        component: ProductCollection
      },
      {
        type: 'placeholder',
        bgClass: 'bg-blue',
        component: CameraDevice
      },
      {
        type: 'placeholder',
        bgClass: 'bg-white',
        component: TrackerDevice
      }
    ],
    nextProject: {
      title: 'HAWK DISPATCH',
      description: 'Streamlined logistics and delivery solutions.',
      link: 'hawk-dispatch-case-study'
    }
  },

  'hawk-dispatch': {
    title: 'HAWK DISPATCH',
    year: '2023',
    client: 'Hawk Dispatch Services',
    services: 'App Design, UX Strategy, Logistics Platform',
    role: 'Senior UX Designer',
    description: [
      'Hawk Dispatch required a comprehensive logistics platform that could handle complex delivery operations while maintaining simplicity for end users.',
      'We created an intuitive interface that streamlines the entire dispatch process, from order placement to delivery confirmation, resulting in improved efficiency and customer satisfaction.'
    ],
    images: [
      {
        type: 'placeholder',
        bgClass: 'bg-orange',
        component: TrackerDevice,
        size: 'hero'
      },
      {
        type: 'placeholder',
        bgClass: 'bg-gray',
        component: ProductCollection
      },
      {
        type: 'placeholder',
        bgClass: 'bg-blue',
        component: VRHeadset
      },
      {
        type: 'placeholder',
        bgClass: 'bg-mint',
        component: CameraDevice
      }
    ],
    nextProject: {
      title: 'BLACK N WHITE',
      description: 'Minimalist design philosophy in action.',
      link: 'black-n-white-case-study'
    }
  },

  'black-n-white': {
    title: 'BLACK N WHITE',
    year: '2023',
    client: 'Black N White Studio',
    services: 'Brand Identity, Portfolio Design, Art Direction',
    role: 'Art Director',
    description: [
      'Black N White Studio approached us to create a portfolio platform that would showcase their minimalist design philosophy while maintaining maximum visual impact.',
      'The result is a clean, sophisticated platform that lets their work speak for itself, with carefully considered typography and spacing that enhances the viewing experience.'
    ],
    images: [
      {
        type: 'placeholder',
        bgClass: 'bg-gray',
        component: SpatialDesign,
        size: 'hero'
      },
      {
        type: 'placeholder',
        bgClass: 'bg-white',
        component: ProductCollection
      },
      {
        type: 'placeholder',
        bgClass: 'bg-light',
        component: TrackerDevice
      },
      {
        type: 'placeholder',
        bgClass: 'bg-mint',
        component: VRHeadset
      }
    ],
    nextProject: {
      title: 'VISION CARE',
      description: 'Healthcare solutions with a human touch.',
      link: 'vision-care-case-study'
    }
  },

  'vision-care': {
    title: 'VISION CARE',
    year: '2024',
    client: 'Vision Care Medical',
    services: 'Healthcare UX, Patient Portal, Medical Interface Design',
    role: 'Healthcare UX Specialist',
    description: [
      'Vision Care Medical needed a patient-centered digital platform that would simplify appointment scheduling and medical record access while maintaining HIPAA compliance.',
      'We designed an empathetic user experience that reduces anxiety and confusion often associated with medical platforms, focusing on clarity and accessibility.'
    ],
    images: [
      {
        type: 'placeholder',
        bgClass: 'bg-blue',
        component: VRHeadset,
        size: 'hero'
      },
      {
        type: 'placeholder',
        bgClass: 'bg-mint',
        component: CameraDevice
      },
      {
        type: 'placeholder',
        bgClass: 'bg-white',
        component: SpatialDesign
      },
      {
        type: 'placeholder',
        bgClass: 'bg-light',
        component: ProductCollection
      }
    ],
    nextProject: {
      title: 'OPTIMUS LUXE',
      description: 'Luxury redefined through digital excellence.',
      link: 'optimus-luxe-case-study'
    }
  },

  'optimus-luxe': {
    title: 'OPTIMUS LUXE',
    year: '2024',
    client: 'Optimus Luxe Collection',
    services: 'Luxury Brand Design, E-commerce Platform, Premium UX',
    role: 'Creative Director',
    description: [
      'Optimus Luxe Collection required a sophisticated e-commerce platform that would reflect their premium brand positioning while delivering exceptional user experience.',
      'We crafted an elegant digital experience that mirrors the luxury of their physical products, with attention to every detail from micro-interactions to premium typography.'
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
        bgClass: 'bg-orange',
        component: SpatialDesign
      },
      {
        type: 'placeholder',
        bgClass: 'bg-blue',
        component: TrackerDevice
      },
      {
        type: 'placeholder',
        bgClass: 'bg-mint',
        component: VRHeadset
      }
    ],
    nextProject: {
      title: 'TRACKER',
      description: 'A comprehensive fitness tracking solution with intuitive design.',
      link: 'tracker-case-study'
    }
  },

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
      title: 'OPTIMUS',
      description: 'Modernizing digital presence with innovative solutions.',
      link: 'optimus-case-study'
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