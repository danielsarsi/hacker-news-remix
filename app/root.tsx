import { MetaFunction, useCatch } from "remix";
import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import globalStyles from "~/styles/global.css";
import LayoutHeader from "./components/LayoutHeader";

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/circle.svg" },
  { rel: "alternate icon", href: "/favicon.ico" },
  { rel: "stylesheet", href: globalStyles },
];

export const meta: MetaFunction = () => ({ title: "hacker news" });

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <html>
      <head>
        <title>{caught.status} / hacker news</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <LayoutHeader />
        <main>
          <h1>{caught.status}</h1>
        </main>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <LayoutHeader />
        <main>
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
