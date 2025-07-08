---
sidebar_position: 6
---

# Routing

Coral uses [TanStack Router](https://tanstack.com/router/latest) for client-side routing. This integration provides a fast, type-safe, file-based routing experience that supports nested layouts, data loading, and code splitting.

---

## Route Definitions

Coral currently uses a generated route tree defined in `routeTree.gen.ts`, created by the TanStack Router plugin at build time. This tree is based on the structure of the `src/routes/` directory.

Each route is defined as a file or folder inside `src/routes/`. For example:

```
src/
└── routes/
    ├── index.tsx       → "/"
    ├── about.tsx       → "/about"
    └── blog/
        └── $postId.tsx → "/blog/:postId"
```

For dynamic routes, prefix parameters with a `$`. You may define layout files by using `_layout.tsx`.

---

## Entry Point

The client-side router is initialized in `src/index.tsx`:

```ts
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

The route tree is statically analyzed and automatically regenerated on development startup or build via Vinxi’s plugin layer.

---

## Features

Coral inherits all routing features supported by TanStack Router, including:

* File-based routing with layout support
* Type-safe route parameters
* Route-level data loading and prefetching
* Code splitting by default
* Declarative and composable route definitions

Refer to the official [TanStack Router documentation](https://tanstack.com/router/latest) for full usage patterns, dynamic segment handling, layout nesting, search parameters, and more.