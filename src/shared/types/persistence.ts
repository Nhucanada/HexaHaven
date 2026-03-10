export interface PersistedGameSession {
  id: string;
  hostId: string;
  playerIds: string[];
  status: string;
  createdAt: number;
  updatedAt: number;
}

export interface PersistedPlayer {
  id: string;
  name: string;
  joinedAt: number;
}

export interface PersistedBoard {
  sessionId: string;
  data: Record<string, unknown>;
}

export interface PersistedTurn {
  sessionId: string;
  turnNumber: number;
  playerId: string;
  timestamp: number;
}
