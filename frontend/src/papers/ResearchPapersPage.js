import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResearchPapersPage from './papers/ResearchPapersPage';
import ResearchPaperDetailsPage from './ResearchPaperDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/research-papers" element={<ResearchPapersPage />} />
        <Route path="/research-paper-details/:id" element={<ResearchPaperDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
