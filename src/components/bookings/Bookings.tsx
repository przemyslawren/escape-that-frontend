import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button } from '@mui/material';
import { BookingType } from '../../types'; // ensure you have this type defined

const Bookings: React.FC = () => {
  const [bookings, setBookings] = useState<BookingType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('/api/customers/bookings');
        if (Array.isArray(response.data)) {
          setBookings(response.data);
        } else {
          setError('Unexpected response format');
        }
      } catch (err) {
        setError('Failed to fetch bookings');
      }
    };

    fetchBookings();
  }, []);

  return (
    <Box>
      <h1>Bookings</h1>
      {error && <p>{error}</p>}
      <Button>Add new Booking</Button>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.escapeRoom.name} - {booking.startTime}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Bookings;
