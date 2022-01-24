import parser from "html-react-parser";
import { sanitize } from "isomorphic-dompurify";

interface HTMLParserProps {
  html: string;
}

function HTMLParser({ html }: HTMLParserProps) {
  return <>{parser(sanitize(html))}</>;
}

export default HTMLParser;
