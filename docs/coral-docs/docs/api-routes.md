---
sidebar_position: 3
---

# API Routes

Coral supports server-side logic through **API routes**, currently implemented via a single file: `src/api.ts`. These routes handle HTTP requests and return JSON responses during development or production, without the need for custom backend infrastructure.

This is powered internally by Vinxi and its `vinxi/http`, which allows Coral to register a handler that responds to HTTP requests under the `/api/` prefix.

## What Are API Routes?

In web development, **API routes** are special endpoints that allow your application to run server-side code in response to incoming HTTP requests — such as `GET`, `POST`, `PUT`, or `DELETE`. These are typically used to:

* Fetch or send data from a database
* Call third-party services (like Stripe, OpenAI, or GitHub APIs)
* Perform server-side logic (authentication, validation, etc.)
* Return dynamic or static content as JSON

Unlike frontend code (which runs in the browser), API routes **run on the server**. This means they can access sensitive information (like API keys or databases) securely, and return results back to the client or other parts of the application.

### In Coral

In Coral, API routes are handled through a server entry file — currently `src/api.ts`. This file processes incoming requests to your backend under the `/api/` path.

For example:

* Visiting `/api/posts` in the browser (or calling it from JavaScript) triggers the API route logic
* Coral handles this route server-side and returns a JSON response
* No frontend JavaScript needs to know *how* the data was fetched — just that it was

### Why Are API Routes Important?

They let you **extend your frontend app into the backend**, without needing a separate server or additional tooling. You can:

* Build fullstack apps with one framework
* Fetch data during page loads
* Power dynamic UIs with real-time or external data

As Coral matures, it will support more advanced features like file-based API routes, server-side validation, and integration with popular protocols like REST, but even the current setup provides all the fundamentals needed to build real-world APIs.

## Current Setup

Coral uses `vinxi/http`’s `eventHandler` to define an API entry point:

```ts
// src/api.ts
import { eventHandler } from "vinxi/http";

export default eventHandler(async (event) => {
  const method = event.method;
  const path = event.path;

  if (method === 'GET' && path === "/posts") {
    const res = await fetch("https://www.learnwithjason.dev/api/v2/episodes");

    if (!res.ok) {
      return { error: "true" };
    }

    const data = await res.json();
    return data;
  }

  return { test: "on" };
});
```

---

## Behavior

* Requests to `/api/posts` are routed to this handler
* On `GET /api/posts`, data is fetched from Learn With Jason’s public API and returned as JSON
* All other unmatched requests receive `{ test: "on" }` as a fallback response

There is **no need to manually set headers or status codes** for standard JSON responses. Vinxi handles that automatically when returning plain objects.

---

## Features

- Server functions run only on the server
- Built-in JSON response support
- External API fetch compatible
- Minimal configuration required
- No file-based routing yet (planned)
- No request validation or type safety by default (can be added manually)

---

## Example Response

```json
[
  {
    "title": "What's New in React 19",
    "guest": "Dan Abramov",
    ...
  },
  ...
]
```

---

## Planned Improvements

Coral will introduce **file-based API routing** similar to modern meta-frameworks. The new structure will look like:

```
src/api/
├── posts.ts         → GET /api/posts
├── posts/[id].ts    → GET /api/posts/:id
├── index.ts         → GET /api/
```

Each file will export an `eventHandler`-based function, keeping the behavior consistent while improving modularity and maintainability.