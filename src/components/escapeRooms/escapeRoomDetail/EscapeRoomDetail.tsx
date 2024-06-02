import React from 'react';
import { useParams } from 'react-router-dom';

const EscapeRoomDetail: React.FC = () => {
  const { id } = useParams();
  return <div>Escape Room Detail: {id}</div>;
};

export default EscapeRoomDetail;
