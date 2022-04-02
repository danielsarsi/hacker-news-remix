import { Link } from "@remix-run/react";
import type { Item, Story } from "../lib/api";

interface ItemFooterProps {
  item: Item | Story;
  showCommentsLink?: boolean;
}

function ItemFooter({ item, showCommentsLink = true }: ItemFooterProps) {
  return (
    <footer className="item_footer">
      <span>{item.time_ago}</span>
      {item.user && <span>{item.user}</span>}
      {showCommentsLink && item.type !== "job" && (
        <Link prefetch="intent" to={`/item/${item.id}`}>
          {item.comments_count === 1
            ? `1 comment`
            : `${item.comments_count ?? 0} comments`}
        </Link>
      )}
    </footer>
  );
}

export default ItemFooter;
