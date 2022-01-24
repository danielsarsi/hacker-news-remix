import type { Item } from "~/lib/api";
import HTMLParser from "~/components/HTMLParser";
import ItemFooter from "~/components/ItemFooter";

interface ItemCommentProps {
  item: Item;
  children?: React.ReactNode;
}

function ItemComment({ item, children }: ItemCommentProps) {
  return (
    <article tabIndex={0} className="item_comment">
      <section className="item_content">
        <HTMLParser html={item.content} />
      </section>
      <ItemFooter item={item} showCommentsLink={false} />
      {children}
    </article>
  );
}

export default ItemComment;
