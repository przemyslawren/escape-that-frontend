import axiosInstance from '../config/axios';
import { AppRoutes, CustomerRoutes } from '../routes/routes';
import {
  BookingRequestDto,
  BookingType,
  EscapeRoomDetailsType,
  EscapeRoomSimpleType,
} from '../types/types';
import { AxiosError } from 'axios';

export const fetchSimpleEscapeRooms = async (): Promise<
  EscapeRoomSimpleType[]
> => {
  try {
    const response = await axiosInstance.get<EscapeRoomSimpleType[]>(
      AppRoutes.ESCAPE_ROOMS
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(
      `Failed to fetch escape rooms: ${
        axiosError.response?.status || axiosError.message
      }`
    );
  }
};

export const fetchEscapeRoomDetails = async (
  id: string
): Promise<EscapeRoomDetailsType> => {
  try {
    const response = await axiosInstance.get<EscapeRoomDetailsType>(
      `${AppRoutes.ESCAPE_ROOMS}/${id}`
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(
      `Failed to fetch escape room detail: ${
        axiosError.response?.status || axiosError.message
      }`
    );
  }
};

export const fetchUserBookings = async (): Promise<BookingType[]> => {
  try {
    const response = await axiosInstance.get<BookingType[]>(
      CustomerRoutes.CUSTOMER_BOOKINGS
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(
      `Failed to fetch user bookings: ${
        axiosError.response?.status || axiosError.message
      }`
    );
  }
};

export const loginUser = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const response = await axiosInstance.post('/auth/login', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(
      `Login failed: ${axiosError.response?.status || axiosError.message}`
    );
  }
};

export const createBooking = async (
  escapeRoomId: number,
  bookingRequest: BookingRequestDto
): Promise<void> => {
  await axiosInstance.post(
    `/escape-rooms/${escapeRoomId}/create-booking`,
    bookingRequest
  );
};
