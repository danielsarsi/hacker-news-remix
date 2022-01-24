import { NavLink } from "remix";

interface NavItemProps {
  topic: string;
}

function NavItem({ topic }: NavItemProps) {
  return (
    <li>
      <NavLink prefetch="intent" to={`/${topic}/1`}>
        {topic}
      </NavLink>
    </li>
  );
}

export default NavItem;
