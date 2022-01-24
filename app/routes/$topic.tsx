import { LoaderFunction, Outlet, redirect, useLoaderData } from "remix";
import Pagination from "~/components/Pagination";
import { apiEndpoints } from "~/lib/api";
import { isValidNumber, isValidTopic } from "~/lib/utils";

export const loader: LoaderFunction = async ({ params }) => {
  if (!isValidTopic(params.topic) || !isValidNumber(params.page)) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  const topic = params.topic;
  const page = +params.page;

  const topics = await apiEndpoints();

  const endpoint = topics.endpoints.find(
    (endpoint) => endpoint.topic === topic
  );

  if (!endpoint || !endpoint.maxPages || endpoint.maxPages < page) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return endpoint.maxPages;
};

export default function TopicIndex() {
  const maxPages = useLoaderData<number>();

  return (
    <>
      <Outlet />
      <Pagination maxPages={maxPages} />
    </>
  );
}
