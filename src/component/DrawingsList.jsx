import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DrawingsList = () => {
  const [drawings, setDrawings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/drawings').then((response) => {
      setDrawings(response.data);
    });
  }, []);

  return (
    <div>
      <h1>All Drawings</h1>
      <ul>
        {drawings.map((drawing) => (
          <li key={drawing._id}>
            <Link to={`/drawing/${drawing._id}`}>{drawing.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrawingsList;
