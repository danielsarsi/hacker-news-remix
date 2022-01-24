import { LoaderFunction, redirect } from "remix";

export const loader: LoaderFunction = async () => {
  throw redirect("/news/1");
};
