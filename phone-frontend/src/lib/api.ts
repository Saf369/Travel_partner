// phone-frontend/src/lib/api.ts
// Centralised API client for calling the Next.js backend from Expo

const BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:3001";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

async function request<T>(
  path: string,
  method: HttpMethod = "GET",
  body?: unknown,
  headers?: Record<string, string>
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(error.error ?? "API request failed");
  }

  return res.json() as Promise<T>;
}

// ── Trips ──────────────────────────────────────────────────────────────────

export const tripsApi = {
  getAll: (userId: string) =>
    request<unknown[]>("/api/trips", "GET", undefined, { "x-user-id": userId }),

  create: (userId: string, data: { destination: string; startDate: string; endDate: string; budget: number; currency?: string }) =>
    request<unknown>("/api/trips", "POST", data, { "x-user-id": userId }),

  generateItinerary: (userId: string, tripId: string, preferences: string[], travelStyle: string) =>
    request<unknown>("/api/trips/generate", "POST", { tripId, preferences, travelStyle }, { "x-user-id": userId }),
};

// ── Chat ───────────────────────────────────────────────────────────────────

export const chatApi = {
  sendMessage: (userId: string, message: string, sessionId?: string) =>
    request<{ reply: string; sessionId: string }>("/api/chat", "POST", { message, sessionId }, { "x-user-id": userId }),
};

// ── Recommendations ────────────────────────────────────────────────────────

export const recommendationsApi = {
  getNearby: (lat: number, lng: number, type?: string) =>
    request<unknown[]>(`/api/recommendations?lat=${lat}&lng=${lng}&type=${type ?? "tourist_attraction"}`),
};
