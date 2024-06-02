import { API_BASE_URL } from '../config/axios';
import { EscapeRoomSimpleType } from '../types/types';

export const fetchSimpleEscapeRooms = async (): Promise<
  EscapeRoomSimpleType[]
> => {
  const response = await fetch(`${API_BASE_URL}/escape-rooms`);
  if (!response.ok) {
    throw new Error(`Failed to fetch escape rooms: ${response.status}`);
  }
  const simpleEscapeRooms: EscapeRoomSimpleType[] = await response.json();
  return simpleEscapeRooms;
};
