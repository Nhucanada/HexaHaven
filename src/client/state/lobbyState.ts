type LobbyRole = 'host' | 'guest' | 'spectator';

export interface LobbySession {
  roomId: string;
  playerId: string;
  playerName: string;
  role: LobbyRole;
}

const STORAGE_KEY = 'hexahaven:lobby-session';

export function setLobbySession(session: LobbySession): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function getLobbySession(): LobbySession | null {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }
  try {
    return JSON.parse(raw) as LobbySession;
  } catch {
    return null;
  }
}

export function clearLobbySession(): void {
  window.localStorage.removeItem(STORAGE_KEY);
}
