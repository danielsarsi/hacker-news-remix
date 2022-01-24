import { LoaderFunction, MetaFunction, redirect, useLoaderData } from "remix";
import ItemFooter from "~/components/ItemFooter";
import ItemHeader from "~/components/ItemHeader";
import { apiTopic, Story } from "~/lib/api";
import { isValidNumber, isValidTopic } from "~/lib/utils";

export const loader: LoaderFunction = async ({ params }) => {
  if (!isValidTopic(params.topic) || !isValidNumber(params.page)) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  const topic = params.topic;
  const page = +params.page;

  const stories = await apiTopic(topic, page);

  if (stories.length === 0) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return stories;
};

export const meta: MetaFunction = ({ params }) => ({
  title: `${params.topic} / hacker news`,
  // description: "This becomes the nice preview on search results.",
});

export default function TopicPage() {
  const stories = useLoaderData<Story[]>();

  return (
    <ol className="stories_list">
      {stories.map((story) => (
        <li key={story.id}>
          <article className="item">
            <ItemHeader item={story} />
            <ItemFooter item={story} />
          </article>
        </li>
      ))}
    </ol>
  );
}
