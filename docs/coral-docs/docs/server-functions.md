---
sidebar_position: 4
---

# Server Functions

Coral supports **server functions** — isolated backend logic modules that are designed to run only on the server. These functions are useful for securely handling data-fetching, third-party API calls, and any logic that should not run in the browser.

Although Coral does not yet enforce boundaries between client and server environments, the convention of `"use server"` is adopted to indicate intent and prepare for future support of server-only execution (as seen in frameworks like Next.js and SolidStart).

---

## What Are Server Functions?

A server function is a regular JavaScript or TypeScript function marked with a `"use server"` directive at the top of the file. This directive is purely **conventional for now**, serving as a signal to both the developer and future tooling that the function is intended to run server-side.

They are ideal for:

* Fetching data from external APIs
* Interfacing with databases or other backend services
* Performing secure or non-serializable operations
* Decoupling business logic from API route handlers or components

---

## Example: `getPosts.ts`

The file `src/getPosts.ts` is a simple example of a server function in Coral. It fetches episode data from the [Learn With Jason](https://www.learnwithjason.dev/) public API and returns it.

```ts
// src/getPosts.ts
"use server";

export async function getPosts() {
  const res = await fetch("https://www.learnwithjason.dev/api/v2/episodes");

  if (!res.ok) {
    return { error: "true" };
  }

  const data = await res.json();

  console.log("server functions are live!");
  return data;
}
```

This function is asynchronous, fetches data from a remote source, and returns it as a plain JavaScript object. It also logs to the server console, demonstrating that it executes in the server runtime context.

---

## Current Usage in Coral

At the moment, Coral allows importing and executing this function **from both server routes and client components**. For example:

### 1. **Used inside an API route (`src/api.ts`)**

```ts
import { getPosts } from './getPosts';

if (method === 'GET' && path === '/posts') {
  const data = await getPosts();
  return data;
}
```

### 2. **Used inside a client-side component (`PostList.tsx`)**

```tsx
import { useEffect, useState } from "react";
import { getPosts } from "../getPosts";

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getPosts();
      setPosts(data);
    }

    load();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
```

This approach **works during development**, but as Coral evolves, `"use server"` functions will eventually be **excluded from client bundles**, enforcing server-only execution.

---

## Best Practices

Although currently unregulated, these best practices are recommended:

* Keep server functions pure and side-effect-free when possible
* Avoid calling them directly from the browser in production — instead, access them through API routes
* Keep them in clearly named modules (e.g., `getPosts.ts`, `fetchData.ts`)
* Group reusable ones into `lib/` or `server/` folders
* Do not use browser APIs (like `window`, `document`) inside these functions
* Do not store them in `components/` or frontend-only folders