import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useAuth } from '../../../hooks/useAuth';
import { createBooking } from '../../../api/api';
import { BookingRequestDto } from '../../../types/types';
import { AppRoutes } from '../../../routes/routes';

const TIME_SLOTS = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
];

const AddBooking: React.FC = () => {
  const { escapeRoomId } = useParams<{ escapeRoomId: string }>();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event: SelectChangeEvent<string>) => {
    setSelectedTime(event.target.value as string);
  };

  const handleBooking = async () => {
    console.log('Booking Request:', selectedDate, selectedTime, escapeRoomId, user)
    if (selectedDate && selectedTime && escapeRoomId && user.id) {
      const bookingRequest: BookingRequestDto = {
        status: 'PENDING', // or the appropriate status
        customerId: user.id,
        escapeRoomId: Number(escapeRoomId),
        startTime: new Date(
          `${selectedDate.toISOString().split('T')[0]}T${selectedTime}`
        ),
        slotNumber: TIME_SLOTS.indexOf(selectedTime) + 1,
        promoCode: false, // or true if you have a promo code logic
      };

      try {
        await createBooking(Number(escapeRoomId), bookingRequest);
        navigate(AppRoutes.HOME);
      } catch (error) {
        console.error('Error creating booking:', error);
      }
    }
  };

  return (
    <div>
      <Typography variant="h4">
        Add Booking for Escape Room {escapeRoomId}
      </Typography>
      <div>
        <Typography variant="h6">Select Date</Typography>
        <DatePicker selected={selectedDate} onChange={handleDateChange} />
      </div>
      <div>
        <Typography variant="h6">Select Time Slot</Typography>
        <Select value={selectedTime} onChange={handleTimeChange} displayEmpty>
          <MenuItem value="" disabled>
            Select Time Slot
          </MenuItem>
          {TIME_SLOTS.map((time) => (
            <MenuItem key={time} value={time}>
              {time}
            </MenuItem>
          ))}
        </Select>
      </div>
      <Button variant="contained" color="primary" onClick={handleBooking}>
        Book the Room
      </Button>
    </div>
  );
};

export default AddBooking;
