export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface RoomSnapshot {
  roomId: string;
  status: 'waiting' | 'ready';
  players: Array<{
    id: string;
    name: string;
  }>;
}
