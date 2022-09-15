import { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { AppLoadContext } from "@remix-run/cloudflare";

export const loader: LoaderFunction = async function({request, context, params}) {
  // const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  // const response = await fetch(url).then(r => r.json()).then(JSON.stringify)
  // return response
  // let _ = await context.D1.exec("create table if not exists Moo(title TEXT NOT NULL);")
  // _ = await context.D1.exec("insert into Moo (title) VALUES ('v1'), ('v2');")
  const stmt = await context.D1.prepare("select * from Bookmarks;")
  const val = await stmt.all(); 
  // console.log(JSON.stringify(values))
  // return JSON.stringify(values)
  // @ts-ignore
  // const val = await context.KV1.get("k");
  return JSON.stringify([
    val,
    Object.getPrototypeOf(context.D1),
    Object.getOwnPropertyNames(context.D1),
    // Object.getPrototypeOf(context.KV1),
    // Object.getOwnPropertyNames(context.KV1),
  ])
}

export default function Index() {
  const json = useLoaderData()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <div>{json}</div>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
