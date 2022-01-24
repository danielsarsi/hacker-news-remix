import NavItem from "~/components/NavItem";
import { TOPICS } from "~/lib/api";

function Nav() {
  return (
    <nav>
      <ul className="nav">
        {TOPICS.map((topic, index) => (
          <NavItem topic={topic} key={`topic-${index}`} />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
