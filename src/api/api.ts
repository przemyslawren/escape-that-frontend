import { API_BASE_URL } from '../config/axios';
import { AppRoutes } from '../routes/routes';
import { EscapeRoomDetailsType, EscapeRoomSimpleType } from '../types/types';

export const fetchSimpleEscapeRooms = async (): Promise<
  EscapeRoomSimpleType[]
> => {
  const response = await fetch(`${API_BASE_URL}${AppRoutes.ESCAPE_ROOMS}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch escape rooms: ${response.status}`);
  }
  const simpleEscapeRooms: EscapeRoomSimpleType[] = await response.json();
  return simpleEscapeRooms;
};

export const fetchEscapeRoomDetails = async (
  id: string
): Promise<EscapeRoomDetailsType> => {
  const response = await fetch(
    `${API_BASE_URL}${AppRoutes.ESCAPE_ROOMS}/${id}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch escape room detail: ${response.status}`);
  }
  const escapeRoomDetails: EscapeRoomDetailsType = await response.json();
  return escapeRoomDetails;
};
