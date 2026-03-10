export interface Player {
  id: string;
  name: string;
}

export interface GameSession {
  id: string;
  hostId: string;
  players: Player[];
  status: GameStatus;
}

export type GameStatus = 'waiting' | 'in-progress' | 'finished';
