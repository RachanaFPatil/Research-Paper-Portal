import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ResearchPaperDetailsPage() {
  const { id } = useParams();
  const [paper, setPaper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5002/api/papers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPaper(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching paper details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading paper details...</p>;
  }

  if (!paper) {
    return <p>Paper not found.</p>;
  }

  return (
    <div className="paper-details-container">
      <Link to={`/department/${paper.department}`} className="back-button">Back to Department</Link> {/* Back button */}
      <h2 className="paper-title">{paper.title}</h2>
      <p className="paper-author"><strong>Authors:</strong> {paper.authors}</p>
      <p className="paper-publisher"><strong>Publisher:</strong> {paper.publisher}</p>
      <p className="paper-abstract"><strong>Abstract:</strong> {paper.abstract}</p>

      {paper.doi && (
        <p className="paper-doi">
          <strong>DOI: </strong>
          <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">
            {`https://doi.org/${paper.doi}`}
          </a>
        </p>
      )}

      <a href={paper.link} className="paper-link-details" target="_blank" rel="noopener noreferrer">Read Full Paper</a>
    </div>
  );
}

export default ResearchPaperDetailsPage;
