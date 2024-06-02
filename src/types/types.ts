export interface EscapeRoomSimpleType {
  id: number;
  name: string;
  description: string;
  hasActor: boolean;
  difficultyLevel: string;
  address: AddressType;
  roomTheme: RoomThemeType;
  playerRange: PlayerRangeType;
  basePrice: number;
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
