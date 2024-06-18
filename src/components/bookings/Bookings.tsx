import React, { useState } from 'react';
import { BookingType } from '../../types/types';


const Bookings: React.FC = () => {
const [bookings, setBookings] = useState<BookingType[]>([]);
const [error, setError] = useState<string | null>(null);

  return (
    <>
      <h1>Bookings</h1>
    </>
  );
};

export default Bookings;
