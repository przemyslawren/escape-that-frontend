import React from 'react';
import { useParams } from 'react-router-dom';

const EditBooking: React.FC = () => {
  const { id } = useParams();
  return <div>Edit Booking: {id}</div>;
};

export default EditBooking;
