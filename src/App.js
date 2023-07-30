import './App.css';
// We import the BrowserRouter implementation from react Dom ; this uses
// the HTML5 API to update the URL
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
