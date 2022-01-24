import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import HTMLParser from "~/components/HTMLParser";
import ItemComment from "~/components/ItemComment";
import ItemFooter from "~/components/ItemFooter";
import ItemHeader from "~/components/ItemHeader";
import { apiItem, Item } from "~/lib/api";
import { isValidNumber } from "~/lib/utils";

export const loader: LoaderFunction = async ({ params }) => {
  if (!isValidNumber(params.id)) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  const id = +params.id;
  const item = await apiItem(id);

  if (!item || item.type === "job" || item.deleted || !item.title) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return item;
};

export const meta: MetaFunction = ({ data }) => ({
  title: `${data.title} / hacker news`,
  description: `(${data.points}) by ${data.user}`,
});

const renderItemComment = (comments: Item[]) =>
  comments.map((comment) => (
    <ItemComment item={comment} key={comment.id}>
      {comment.comments && renderItemComment(comment.comments)}
    </ItemComment>
  ));

export default function ItemPage() {
  const item = useLoaderData<Item>();

  return (
    <article>
      <section className="item">
        <ItemHeader item={item} />
        <ItemFooter item={item} />
      </section>

      {item.content && (
        <section className="item_content">
          <HTMLParser html={item.content} />
        </section>
      )}

      {item.comments && (
        <section className="item_comments">
          {renderItemComment(item.comments)}
        </section>
      )}
    </article>
  );
}
