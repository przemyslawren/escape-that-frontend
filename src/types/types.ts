export interface EscapeRoomSimpleType {
  id: number;
  name: string;
  difficultyLevel: string;
  hasActor: boolean;
  address: AddressType;
  roomTheme: RoomThemeType;
  playerRange: PlayerRangeType;
  basePrice: number;
}

export interface EscapeRoomDetailsType extends EscapeRoomSimpleType {
  description: string;
  safetyRequirements: string[];
}

export interface AddressType {
  street: string;
  city: string;
  postalCode: string;
}

export interface RoomThemeType {
  themeName: string;
  description: string;
}

export interface PlayerRangeType {
  minPlayers: number;
  maxPlayers: number;
}

export interface BookingType {
  id: number;
  promoCode: boolean;
  slotNumber: number;
  startTime: string;
  status: string;
  escapeRoomSimpleDto: EscapeRoomSimpleType;
}

export interface BookingRequestDto {
  status: string;
  customerId: number;
  escapeRoomId: number;
  startTime: Date;
  slotNumber: number;
  promoCode: boolean;
}
