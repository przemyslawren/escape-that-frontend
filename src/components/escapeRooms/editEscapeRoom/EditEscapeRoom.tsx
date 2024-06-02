import React from 'react';
import { useParams } from 'react-router-dom';

const EditEscapeRoom:React.FC = () => {
  const { id } = useParams();
  return <div>Edit Escape Room: {id}</div>;
};

export default EditEscapeRoom;
