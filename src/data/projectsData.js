// Import project images
import optimusImg1 from '../images/optimus/Screenshot 2025-10-19 202742.png';
import optimusImg2 from '../images/optimus/Screenshot 2025-10-19 202754.png';
import optimusImg3 from '../images/optimus/Screenshot 2025-10-19 202816.png';
import optimusImg4 from '../images/optimus/Screenshot 2025-10-19 202828.png';
import optimusImg5 from '../images/optimus/Screenshot 2025-10-19 202841.png';
import optimusImg6 from '../images/optimus/Screenshot 2025-10-19 202856.png';

import gfImg1 from '../images/GF/Screenshot 2025-10-19 210004.png';
import gfImg2 from '../images/GF/Screenshot 2025-10-19 210013.png';
import gfImg3 from '../images/GF/Screenshot 2025-10-19 210021.png';
import gfImg4 from '../images/GF/Screenshot 2025-10-19 210032.png';
import gfImg5 from '../images/GF/Screenshot 2025-10-19 210047.png';
import gfImg6 from '../images/GF/Screenshot 2025-10-19 210106.png';

import hawkImg1 from '../images/hawk/Screenshot 2025-10-19 214555.png';
import hawkImg2 from '../images/hawk/Screenshot 2025-10-19 214604.png';
import hawkImg3 from '../images/hawk/Screenshot 2025-10-19 214611.png';
import hawkImg4 from '../images/hawk/Screenshot 2025-10-19 214620.png';
import hawkImg5 from '../images/hawk/Screenshot 2025-10-19 214636.png';
import hawkImg6 from '../images/hawk/Screenshot 2025-10-19 214644.png';

import luxeImg1 from '../images/luxe/Screenshot 2025-10-19 213550.png';
import luxeImg2 from '../images/luxe/Screenshot 2025-10-19 213600.png';
import luxeImg3 from '../images/luxe/Screenshot 2025-10-19 213608.png';
import luxeImg4 from '../images/luxe/Screenshot 2025-10-19 213620.png';
import luxeImg5 from '../images/luxe/Screenshot 2025-10-19 213933.png';

import blackImg1 from '../images/black/Screenshot 2025-10-20 114845.png';
import blackImg2 from '../images/black/Screenshot 2025-10-20 114932.png';
import blackImg3 from '../images/black/Screenshot 2025-10-20 114955.png';
import blackImg4 from '../images/black/Screenshot 2025-10-20 115009.png';
import blackImg5 from '../images/black/Screenshot 2025-10-20 115025.png';
import blackImg6 from '../images/black/Screenshot 2025-10-20 115049.png';

import visionImg1 from '../images/vision/Screenshot 2025-10-19 221920.png';
import visionImg2 from '../images/vision/Screenshot 2025-10-19 221929.png';
import visionImg3 from '../images/vision/Screenshot 2025-10-19 221945.png';
import visionImg4 from '../images/vision/Screenshot 2025-10-19 221954.png';
import visionImg5 from '../images/vision/Screenshot 2025-10-19 222001.png';
import visionImg6 from '../images/vision/Screenshot 2025-10-19 222015.png';

// Import project logos
import optimusLogo from '../images/optimus.png';
import gfLogo from '../images/gf.png';
import hawkLogo from '../images/hawk.png';
import luxeLogo from '../images/optimus luxe.png';
import blackLogo from '../images/black n white.png';

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
    client: 'Optimus Properties',
    services: 'Website Design & Development, Social Media Management, Content Creation, Performance Marketing',
    role: 'Digital Solutions Lead',
    logo: optimusLogo,
    description: [
      'Optimus Properties, a leading real estate company in Dubai, partnered with us for a complete digital transformation including website design and development, featuring secondary and off-plan property listings.',
      'We delivered a comprehensive digital ecosystem that includes a sophisticated property platform showcasing their secondary and off-plan developments, coupled with strategic social media management, engaging content creation, and performance marketing campaigns.',
      'The result is a powerful digital presence that drives property inquiries, enhances brand visibility, and positions Optimus Properties as a premier choice in Dubai\'s competitive real estate market.'
    ],
    images: [
      {
        type: 'image',
        src: optimusImg1,
        alt: 'Optimus Homepage Design',
        size: 'hero'
      },
      {
        type: 'image',
        src: optimusImg2,
        alt: 'Optimus Property Listings'
      },
      {
        type: 'image',
        src: optimusImg3,
        alt: 'Optimus Property Details'
      },
      {
        type: 'image',
        src: optimusImg4,
        alt: 'Optimus Search Interface'
      },
      {
        type: 'image',
        src: optimusImg5,
        alt: 'Optimus Mobile Design'
      },
      {
        type: 'image',
        src: optimusImg6,
        alt: 'Optimus Contact Page'
      }
    ],
    nextProject: {
      title: 'GREENFUTURE',
      description: 'Comprehensive digital marketing for Dubai & Pakistan real estate.',
      link: 'greenfuture-detail',
      floatingImages: [
        { src: gfImg1, alt: 'GreenFuture Preview 1' },
        { src: gfImg2, alt: 'GreenFuture Preview 2' },
        { src: gfImg3, alt: 'GreenFuture Preview 3' }
      ]
    }
  },

  'greenfuture': {
    title: 'GREENFUTURE',
    year: '2024',
    client: 'Green Future Properties',
    services: 'Social Media Management, Website Management, Content Creation, Performance Marketing',
    role: 'Digital Marketing Manager',
    logo: gfLogo,
    description: [
      'Green Future Properties, a dynamic real estate company operating in Dubai and Pakistan, partnered with us for comprehensive digital marketing services including social media management, website oversight, and strategic content creation.',
      'We developed and executed a multi-channel digital strategy that includes engaging social media campaigns, website optimization, compelling content creation, and performance marketing initiatives that significantly increased their property inquiries and brand visibility across both markets.'
    ],
    images: [
      {
        type: 'image',
        src: gfImg1,
        alt: 'Greenfuture Homepage',
        size: 'hero'
      },
      {
        type: 'image',
        src: gfImg2,
        alt: 'Greenfuture Properties'
      },
      {
        type: 'image',
        src: gfImg3,
        alt: 'Greenfuture Sustainability Features'
      },
      {
        type: 'image',
        src: gfImg4,
        alt: 'Greenfuture Project Gallery'
      },
      {
        type: 'image',
        src: gfImg5,
        alt: 'Greenfuture Contact Interface'
      },
      {
        type: 'image',
        src: gfImg6,
        alt: 'Greenfuture Mobile Experience'
      }
    ],
    nextProject: {
      title: 'HAWK DISPATCH',
      description: 'Professional truck dispatch management platform.',
      link: 'hawk-dispatch-detail',
      floatingImages: [
        { src: hawkImg1, alt: 'Hawk Dispatch Preview 1' },
        { src: hawkImg2, alt: 'Hawk Dispatch Preview 2' },
        { src: hawkImg3, alt: 'Hawk Dispatch Preview 3' }
      ]
    }
  },

  'hawk-dispatch': {
    title: 'HAWK DISPATCH',
    year: '2023',
    client: 'Hawk Dispatch Company',
    services: 'Web Design, Web Development, Digital Platform',
    role: 'Lead Developer',
    logo: hawkLogo,
    description: [
      'Hawk Dispatch, a leading truck dispatch company, approached us to design and develop a comprehensive web platform that would streamline their trucking operations and improve communication between dispatchers and drivers.',
      'We delivered a robust web solution that manages fleet operations, tracks shipments in real-time, and provides an intuitive dashboard for both dispatchers and truck drivers, significantly improving operational efficiency and client satisfaction.'
    ],
    images: [
      {
        type: 'image',
        src: hawkImg1,
        alt: 'Hawk Dispatch Homepage',
        size: 'hero'
      },
      {
        type: 'image',
        src: hawkImg2,
        alt: 'Hawk Dispatch Services'
      },
      {
        type: 'image',
        src: hawkImg3,
        alt: 'Hawk Dispatch Dashboard'
      },
      {
        type: 'image',
        src: hawkImg4,
        alt: 'Hawk Dispatch Tracking'
      },
      {
        type: 'image',
        src: hawkImg5,
        alt: 'Hawk Dispatch Mobile App'
      },
      {
        type: 'image',
        src: hawkImg6,
        alt: 'Hawk Dispatch Contact'
      }
    ],
    nextProject: {
      title: 'BLACK N WHITE',
      description: 'Minimalist e-commerce excellence for modern fashion.',
      link: 'black-n-white-detail',
      floatingImages: [
        { src: blackImg1, alt: 'Black N White Preview 1' },
        { src: blackImg2, alt: 'Black N White Preview 2' },
        { src: blackImg3, alt: 'Black N White Preview 3' }
      ]
    }
  },

  'black-n-white': {
    title: 'BLACK N WHITE',
    year: '2023',
    client: 'Black N White Clothing',
    services: 'E-commerce Platform, Brand Identity, UX/UI Design',
    role: 'Lead Designer',
    logo: blackLogo,
    description: [
      'Black N White Clothing approached us to create a sophisticated e-commerce platform that would embody their minimalist aesthetic while delivering exceptional user experience.',
      'We developed a clean, modern online store that perfectly balances simplicity with functionality, featuring intuitive navigation, seamless checkout, and a design that lets their clothing collections take center stage.'
    ],
    images: [
      {
        type: 'image',
        src: blackImg1,
        alt: 'Black N White Homepage',
        size: 'hero'
      },
      {
        type: 'image',
        src: blackImg2,
        alt: 'Black N White Portfolio'
      },
      {
        type: 'image',
        src: blackImg3,
        alt: 'Black N White Product Gallery'
      },
      {
        type: 'image',
        src: blackImg4,
        alt: 'Black N White Collections'
      },
      {
        type: 'image',
        src: blackImg5,
        alt: 'Black N White About Page'
      },
      {
        type: 'image',
        src: blackImg6,
        alt: 'Black N White Contact'
      }
    ],
    nextProject: {
      title: 'VISION CARE',
      description: 'Healthcare solutions with a human touch.',
      link: 'vision-care-detail'
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
        type: 'image',
        src: visionImg1,
        alt: 'Vision Care Homepage',
        size: 'hero'
      },
      {
        type: 'image',
        src: visionImg2,
        alt: 'Vision Care Services'
      },
      {
        type: 'image',
        src: visionImg3,
        alt: 'Vision Care Appointment Booking'
      },
      {
        type: 'image',
        src: visionImg4,
        alt: 'Vision Care Patient Portal'
      },
      {
        type: 'image',
        src: visionImg5,
        alt: 'Vision Care Treatment Plans'
      },
      {
        type: 'image',
        src: visionImg6,
        alt: 'Vision Care Contact Information'
      }
    ],
    nextProject: {
      title: 'OPTIMUS LUXE',
      description: 'Luxury real estate excellence in Dubai\'s premium market.',
      link: 'optimus-luxe-detail',
      floatingImages: [
        { src: luxeImg1, alt: 'Optimus Luxe Preview 1' },
        { src: luxeImg2, alt: 'Optimus Luxe Preview 2' },
        { src: luxeImg3, alt: 'Optimus Luxe Preview 3' }
      ]
    }
  },

  'optimus-luxe': {
    title: 'OPTIMUS LUXE',
    year: '2024',
    client: 'Optimus Luxe Real Estate',
    services: 'Web Design, Property Portal Development, Luxury Branding',
    role: 'Lead Designer',
    logo: luxeLogo,
    description: [
      'Optimus Luxe, a premier luxury real estate company in Dubai, approached us to build a sophisticated website featuring their exclusive property listings and premium real estate services.',
      'We developed an elegant property portal that showcases Dubai\'s finest luxury properties with immersive galleries, detailed property information, and seamless search functionality, perfectly reflecting the prestige of Dubai\'s luxury real estate market.'
    ],
    images: [
      {
        type: 'image',
        src: luxeImg1,
        alt: 'Optimus Luxe Homepage',
        size: 'hero'
      },
      {
        type: 'image',
        src: luxeImg2,
        alt: 'Optimus Luxe Property Showcase'
      },
      {
        type: 'image',
        src: luxeImg3,
        alt: 'Optimus Luxe Premium Listings'
      },
      {
        type: 'image',
        src: luxeImg4,
        alt: 'Optimus Luxe Property Details'
      },
      {
        type: 'image',
        src: luxeImg5,
        alt: 'Optimus Luxe Contact Page'
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