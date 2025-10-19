import React from 'react';
import CaseStudyDetail from './CaseStudyDetail';

// Example component showing how to use CaseStudyDetail
// In a real app, you would use React Router to handle routing

const CaseStudyExample = () => {
  return (
    <div>
      {/* Example: Case Study for project ID 1 (Puls) */}
      <CaseStudyDetail projectId={1} />
      
      {/* 
      To show different case studies, change the projectId:
      <CaseStudyDetail projectId={2} /> // EyeCatcher
      
      In a real React Router setup, this would look like:
      
      // App.js
      import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
      
      function App() {
        return (
          <Router>
            <Routes>
              <Route path="/" element={<MainApp />} />
              <Route path="/case-study/:id" element={<CaseStudyDetailPage />} />
            </Routes>
          </Router>
        );
      }
      
      // CaseStudyDetailPage.js
      import { useParams } from 'react-router-dom';
      
      function CaseStudyDetailPage() {
        const { id } = useParams();
        return <CaseStudyDetail projectId={parseInt(id)} />;
      }
      */}
    </div>
  );
};

export default CaseStudyExample;
