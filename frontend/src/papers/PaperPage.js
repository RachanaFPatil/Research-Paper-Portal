import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PaperPage() {
  const { name } = useParams(); // Get department name from the URL
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPapers = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/api/papers/${name}`);
        const data = await response.json();
        setPapers(data); // Set papers from the response
      } catch (error) {
        console.error('Error fetching papers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPapers();
  }, [name]); // Re-fetch papers when the department name changes

  return (
    <div>
      <h1>Papers in {name.replace('-', ' ').toUpperCase()} Department</h1>
      
      {loading ? (
        <p>Loading papers...</p>
      ) : (
        <div className="papers-list">
          {papers.length > 0 ? (
            papers.map((paper) => (
              <div key={paper._id} className="paper-card">
                <h3>{paper.title}</h3>
                <p><strong>Authors:</strong> {paper.authors}</p>
                <p><strong>Publisher:</strong> {paper.publisher}</p>
                <p><strong>Abstract:</strong> {paper.abstract}</p>
                <a href={paper.doi} target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
            ))
          ) : (
            <p>No papers available for this department.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default PaperPage;
