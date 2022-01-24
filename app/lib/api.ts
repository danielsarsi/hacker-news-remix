const API_URL = "https://api.hnpwa.com/v0";

// https://github.com/davideast/hnpwa-api/blob/main/src/api/interfaces.ts
export interface Story {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}

export interface Item {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  type: string;
  url?: string;
  domain?: string;
  comments: Item[];
  level: number;
  comments_count: number;
}

export interface API {
  name: string;
  endpoints: APIEndpoints[];
}

export interface APIEndpoints {
  topic: Topic;
  url: string;
  maxPages: number;
}

export const TOPICS = ["news", "newest", "ask", "show", "jobs"] as const;
export type Topic = typeof TOPICS[number];

export class APIError extends Error {
  statusCode: number;

  constructor(statusCode: number) {
    super(`API responded with ${statusCode}`);
    this.name = "APIError";
    this.statusCode = statusCode;
  }
}

export async function api<T>(url: string) {
  const res = await fetch(`${API_URL}${url}`);

  if (res.ok) {
    const json = await res.json();

    if (json === null) {
      throw new APIError(404);
    }

    return json as Promise<T>;
  }

  throw new APIError(res.status);
}

export async function apiEndpoints() {
  return api<API>("/");
}

export async function apiTopic(topic: Topic, page: number) {
  return api<Story[]>(`/${topic}/${page}.json`);
}

export async function apiItem(id: number) {
  return api<Item>(`/item/${id}.json`);
}
