import { ClientEnv } from '../config/env';

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${ClientEnv.serverUrl}${path}`, init);
  return res.json() as Promise<T>;
}
