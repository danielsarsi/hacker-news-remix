import { Link } from "remix";
import Circle from "~/components/Circle";
import Nav from "~/components/Nav";

function LayoutHeader() {
  return (
    <header className="header">
      <Link to="/news/1">
        <Circle />
      </Link>
      <Nav />
    </header>
  );
}

export default LayoutHeader;
