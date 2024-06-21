import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button } from '@mui/material';

const Bookings: React.FC = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('/customers/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
      <Box>
        <h1>Bookings</h1>
        <Button>Add new Booking</Button>
        <ul>
          {bookings.map((booking: any) => (
            <li
              key={booking.id}
            >{`Booking ID: ${booking.id}, Status: ${booking.status}`}</li>
          ))}
        </ul>
      </Box>
    </>
  );
};

export default Bookings;
