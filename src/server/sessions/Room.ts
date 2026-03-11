export interface RoomPlayer {
  id: string;
  name: string;
}

export type RoomStatus = 'waiting' | 'ready';

export interface Room {
  id: string;
  hostId: string;
  players: RoomPlayer[];
  status: RoomStatus;
}
