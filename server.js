import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";

const handleRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => context.env,
});

export function onRequest(context) {
  const stmt = context.env.D1.prepare("select * from bookmarks")
  const values = await stmt.first();
  console.log(values)
  console.log(context)
  return handleRequest(context);
}
