export const ClientEnv = {
  serverUrl: import.meta.env.VITE_SERVER_URL ?? 'http://localhost:3000',
} as const;
