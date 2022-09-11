import { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async function({request, context, params}) {
  // const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  // const response = await fetch(url).then(r => r.json()).then(JSON.stringify)
  // return response
  return JSON.stringify(context)
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
