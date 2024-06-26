import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { fetchUserBookings } from '../../api/api';
import { BookingType } from '../../types/types';
import EscapeRoomList from '../escapeRooms/escapeRoomList/EscapeRoomList';
import { useAuth } from '../../hooks/useAuth';

const Bookings: React.FC = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<BookingType[]>([]);
  const [showEscapeRoomList, setShowEscapeRoomList] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const fetchedBookings = await fetchUserBookings(user.id);
        setBookings(fetchedBookings);
      } catch (err) {
        setError('Failed to fetch bookings.');
      }
    };
    fetchBookings();
  });

  const handleAddBooking = () => {
    setShowEscapeRoomList(true);
  };

  return (
    <>
      <Box>
        {bookings.length === 0 && <p>No bookings found.</p>}
        {showEscapeRoomList == false && <h1>Bookings</h1>}
        {error && <p>{error}</p>}
        {showEscapeRoomList == false && (
          <List>
            {bookings.map((booking) => (
              <ListItem key={booking.id}>
                <ListItemText
                  primary={booking.escapeRoomSimpleDto.name}
                  secondary={`Slot: ${booking.slotNumber}, Start Time: ${booking.startTime}, Status: ${booking.status}`}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
      {showEscapeRoomList == false && (
        <>
          <Button onClick={handleAddBooking}>Add new Booking</Button>
          <Divider sx={{ margin: 2 }} />
        </>
      )}
      <Box>{showEscapeRoomList && <EscapeRoomList />}</Box>
    </>
  );
};

export default Bookings;
