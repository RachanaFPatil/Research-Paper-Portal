import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function DepartmentPage() {
  const { department } = useParams();
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5002/api/papers?department=${department}`)
      .then((response) => response.json())
      .then((data) => {
        setPapers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching papers:', error);
        setLoading(false);
      });
  }, [department]);

  if (loading) {
    return <p>Loading papers...</p>;
  }

  return (
    <div className="department-page">
      <Link to="/" className="back-button">Back to Department List</Link> {/* Back button */}
      <h2 className="department-title">Research Papers in {department.replace(/-/g, ' ')}</h2>
      {papers.length > 0 ? (
        <ul className="papers-list">
          {papers.map((paper) => (
            <li key={paper._id} className="paper-item">
              <Link to={`/paper/${paper._id}`} className="paper-link">{paper.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No papers found for this department.</p>
      )}
    </div>
  );
}

export default DepartmentPage;
