import { Link } from "remix";
import type { Item, Story } from "~/lib/api";

interface ItemHeaderProps {
  item: Item | Story;
}

function ItemHeader({ item }: ItemHeaderProps) {
  return (
    <header className="item_header">
      <p className="item_points">
        {item.points ?? (item.type === "job" ? <>&#8212;</> : 0)}
      </p>
      <h1 className="item_title">
        {item.url?.includes("item?id=") ? (
          <Link className={item.type} prefetch="intent" to={`/item/${item.id}`}>
            {item.title}
          </Link>
        ) : (
          <a href={item.url} className={item.type}>
            {item.title}
          </a>
        )}
      </h1>
    </header>
  );
}

export default ItemHeader;
