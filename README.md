# Coral - An Experimental DX First Meta Framework

**Coral** is an experimental, modern meta-framework designed to make fullstack development as smooth as possible. Featuring routing, server functions, full SPA mode, and an ergonomic React + TanStack Router setup — Coral focuses on a lightweight yet powerful developer experience.

---

## Features

* React + TanStack Router for type-safe, code-split routing
* Built-in Server Functions powered by Vinxi
* Fully SPA by default with support for HTTP & static routes
* Zero-config DX — write components, call server logic, ship!

---

## Installation

Clone this repo and navigate to the `core` folder and install dependencies:

```bash
npm install
npx vinxi dev
```

---

## Project Structure

```
.
├── index.html              # SPA entry point
├── app.config.ts           # Vinxi app configuration
├── public/                 # For Static content like images
├── src/
│   ├── index.tsx           # Client entry point (React + TanStack Router)
│   ├── api.ts              # HTTP handler
│   ├── getPosts.ts         # Server function
│   ├── routes/             # File-based routes powered by TanStack Router
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   ├── posts.tsx
│   │   └── about.tsx
│   └── components/
│       ├── Counter.tsx
│       └── PostList.tsx
├── .gitignore
├── package.json
├── package-lock.json
```

Upon installation and running the dev server you will also see a `.tanstack` folder and a `routeTree.gen.ts` be generated

---

## Usage

### Client-Side Routing

```tsx
// src/index.tsx
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
```

Routes are colocated in `src/routes/`, such as:

```tsx
// src/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router";
import { Counter } from "../components/Counter";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <h1>Coral - A DX first minimalistic metaframework</h1>
      <Counter />
    </>
  ),
});
```

---

### Server Functions

```ts
// src/getPosts.ts
"use server";

export async function getPosts() {
  const res = await fetch("https://exampleapi.com/api");
  if (!res.ok) return { error: true };
  return await res.json();
}
```

### API Routes

Coral includes a dedicated HTTP API layer using Vinxi's native `http` router. This enables creating API endpoints alongside your client and server logic, without the need for external server frameworks.

Currently, the following route is implemented:

* **`GET /api/posts`** — Returns raw JSON data used by the `getPosts` server function.

This behavior is defined in the `src/api.ts` file:

```ts
// src/api.ts
import { eventHandler } from "vinxi/http";

export default eventHandler(async (event) => {
  const { method, path } = event;

  if (method === "GET" && path === "/posts") {
    const res = await fetch("https://www.example.testapi.com/api");

    if (!res.ok) {
      return { error: true };
    }

    return await res.json();
  }

  return { message: "on" };
});
```

This API can be queried directly via `curl`, Postman, or the browser:

```bash
curl http://localhost:3000/api/posts
```

### Components

```tsx
// src/components/Counter.tsx
export const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>count: {count}</button>;
};
```

```tsx
// src/components/PostList.tsx
export const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then(setPosts);
  }, []);
  return (
    <>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};
```

---

## Vinxi Config

The app uses 3 core routes:

* `spa` → Full client app (`index.html`)
* `http` → API handler (currently in `src/api.ts`)
* `static` → Static assets from `/public`

Server functions are auto-routed via `@vinxi/server-functions`.

---

## Try it

Run the app and visit:

* `/` → Home page with counter
* `/about` → A client side route
* `/posts` → Server function powered blog list
* `/api/posts` → Returns raw JSON

---

## Built With

* Vinxi
* React
* TanStack Router
* Vite
* @vinxi/server-functions

---

## License

MIT

---

## Author

**Samiran Ghosh**

Coral is a personal experiment in building fullstack frameworks with maximum developer joy and minimum config overhead. Contributions and ideas welcome!

---

## Features under Consideration

* Static Site Generation (SSG)
* CLI for DX
* True SSR
* Vitest-based testing

---

## Acknowledgements

I want to take a moment to thank the developers and engineering teams whose work, ideas, and content have inspired me throughout this journey:

* Evan You – for shaping the modern frontend landscape and showing what thoughtful design in frameworks looks like.
* Vite – for redefining speed and simplicity in tooling.
* Vinxi – for making meta-frameworks fun and surprisingly easy to work with.
* Vike – for being a constant source of inspiration, especially around routing and SSR.
* React – for being the foundation and mindset behind Coral’s UI layer.
* Solid – for pushing the boundaries of reactivity and performance in JavaScript frameworks.
* Svelte – for showing us what compiler-first thinking can do to simplify UI development.
* TanStack – for delivering brilliant, headless solutions across routing, tables, forms, and more — and for inspiring how I think about framework primitives.
* Brenley Dueck – for building tools and ideas that feel both practical and forward-looking.
* Dev Agarwal – for breaking down complex concepts in ways that actually stick.
* CodeTV (formerly Learn with Jason) – for being that friendly guide into the world of fullstack development and beyond.
* Nitro – for showing how powerful server architecture can still feel lightweight.

And to everyone I may have forgotten — whether you wrote a tool, shared a blog post, answered a question, or just put your ideas out into the world:
thank you. You've made building Coral possible, and the process a lot more joyful.