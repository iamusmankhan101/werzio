import React from 'react';
import WorkDetailPage from './WorkDetailPage';
import { getProjectData } from '../data/projectsData';
import './ProjectComponents.css'; // For device illustrations

const DynamicProjectPage = ({ projectId }) => {
  const projectData = getProjectData(projectId);
  
  return <WorkDetailPage projectData={projectData} />;
};

export default DynamicProjectPage;