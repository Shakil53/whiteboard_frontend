import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DrawingsList from './components/DrawingsList';
import ViewDrawing from './components/ViewDrawing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DrawingsList />} />
        <Route path="/drawing/:id" element={<ViewDrawing />} />
      </Routes>
    </Router>
  );
}

export default App;
