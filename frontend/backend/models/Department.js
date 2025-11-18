import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Departments() {
  const [papers, setPapers] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const departments = [
    'computer-science',
    'electronics-communication',
    'electrical-electronics',
    'ai-ml',
    'information-science',
    'mechanical',
    'chemistry',
    'mathematics',
    'physics',
  ];

  useEffect(() => {
    if (selectedDepartment) {
      fetch(`http://localhost:5002/api/papers?department=${selectedDepartment}`)
        .then((response) => response.json())
        .then((data) => setPapers(data));
    }
  }, [selectedDepartment]);

  return (
    <div>
      <h1>Select a Department</h1>
      <div>
        {departments.map((department) => (
          <button key={department} onClick={() => setSelectedDepartment(department)}>
            {department.replace('-', ' ')}
          </button>
        ))}
      </div>

      {selectedDepartment && (
        <div>
          <h2>Research Papers in {selectedDepartment.replace('-', ' ')}</h2>
          <ul>
            {papers.map((paper) => (
              <li key={paper._id}>
                <Link to={`/papers/${paper._id}`}>{paper.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Departments;
