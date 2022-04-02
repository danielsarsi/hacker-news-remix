import { NavLink } from "@remix-run/react";

interface PaginationProps {
  maxPages: number;
}

function Pagination({ maxPages }: PaginationProps) {
  return (
    <nav role="navigation" className="pagination_nav">
      <ol className="pagination_list">
        {Array.from({ length: maxPages }, (_, i) => (
          <li key={i}>
            <NavLink to={`${i + 1}`}>{i + 1}</NavLink>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Pagination;
