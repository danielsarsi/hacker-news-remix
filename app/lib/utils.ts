import { TOPICS, Topic } from "./api";

export function isValidTopic(topic: string | undefined): topic is Topic {
  return typeof topic === "string" && TOPICS.includes(topic as Topic);
}

export function isValidNumber(page: string | undefined): page is string {
  return typeof page === "string" && !Number.isNaN(+page) && +page > 0;
}
