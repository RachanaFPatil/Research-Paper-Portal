import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import the CSS file

import DepartmentPage from './papers/DepartmentPage';
import ResearchPaperDetailsPage from './ResearchPaperDetailsPage';

function App() {
  const departments = [
    'Computer-Science and Engineering',
    'Electronics and Communication Engineering',
    'Electrical and Electronics Engineering',
    'Artificial-Intelligence and Machine Learning',
    'Information-Science and Engineering',
    'Mechanical-Engineering',
    'Department of Chemistry',
    'Department of Mathematics',
    'Department of Physics',
  ];

  return (
    <Router>
      <div className="App">
        {/* Routes for department buttons and department pages */}
        <Routes>
          {/* Show department buttons on the home page */}
          <Route
            path="/"
            element={
              <>
                <h1>Research Paper Publications Portal</h1>
                {/* Container for department buttons */}
                <div className="department-container">
                  {departments.map((department, index) => (
                    <Link
                      to={`/department/${department}`}
                      key={index}
                      className="department-link"
                    >
                      <div className="department">
                        {department.replace(/-/g, ' ')}
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            }
          />

          {/* Department Page (Displays only the papers) */}
          <Route path="/department/:department" element={<DepartmentPage />} />
          {/* Research Paper Details Page */}
          <Route path="/paper/:id" element={<ResearchPaperDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
