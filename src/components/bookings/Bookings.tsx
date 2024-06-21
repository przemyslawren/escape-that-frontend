// src/components/bookings/Bookings.tsx
import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { fetchUserBookings } from '../../api/api';
import { BookingType } from '../../types/types';

const Bookings: React.FC = () => {
  const [bookings, setBookings] = useState<BookingType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const fetchedBookings = await fetchUserBookings();
        setBookings(fetchedBookings);
      } catch (err) {
        setError('Failed to fetch bookings.');
      }
    };
    fetchBookings();
  }, []);

  return (
    <>
      <Box>
        <h1>Bookings</h1>
        {error && <p>{error}</p>}
        {/* {bookings.map((booking) => (
          <div key={booking.id}>
            <p>{booking.escapeRoom.name}</p>
            <p>{booking.bookingStartDate}</p>
          </div>
        ))} */}
        <Button>Add new Booking</Button>
      </Box>
    </>
  );
};

export default Bookings;
