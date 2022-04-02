import { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import globalStyles from "~/styles/global.css";
import LayoutHeader from "./components/LayoutHeader";

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/circle.svg" },
  { rel: "alternate icon", href: "/favicon.ico" },
  { rel: "stylesheet", href: globalStyles },
];

export const meta: MetaFunction = () => ({
  title: "hacker news",
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
});

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <html>
      <head>
        <title>{caught.status} / hacker news</title>
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
