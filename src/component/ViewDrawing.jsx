import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewDrawing = () => {
  const { id } = useParams();
  const [drawing, setDrawing] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/drawings/${id}`).then((response) => {
      setDrawing(response.data);
    });
  }, [id]);

  if (!drawing) return <div>Loading...</div>;

  return (
    <div>
      <h1>{drawing.title}</h1>
      {/* Render the drawing, lines, shapes, and texts */}
    </div>
  );
};

export default ViewDrawing;
