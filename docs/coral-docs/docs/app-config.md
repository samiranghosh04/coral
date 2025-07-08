---
sidebar_position: 5
---

# App Configuration

The `app.config.ts` file is the central configuration point for any Coral application. It defines the routing layers, entry points, and plugin integrations that determine how your application is executed at runtime. This configuration is powered by [Vinxi](https://vinxi.vercel.app/), a meta-framework that integrates with Vite, offering both flexibility and control over client and server behavior.

Unlike traditional meta-frameworks that abstract this configuration internally, Coral intentionally keeps `app.config.ts` exposed within the application directory. This decision reflects Coral’s commitment to transparency, developer autonomy, and composability.

If however, you just want to ship SPA apps as it is, you dont need to touch this file at all.

---

## Purpose and Design Philosophy

Coral keeps `app.config.ts` accessible for the following reasons:

* **Inspectability:** Developers can audit exactly how routing and plugins are handled, without relying on hidden conventions.
* **Modifiability:** Individual users or teams can override, extend, or minimize the routing and plugin stack to suit their application needs.
* **Extensibility:** Developers can use Coral as a foundation, building custom layers on top of or around it, effectively making it a base framework if desired.

This approach provides a balance between structured defaults and low-level access, encouraging experimentation and adaptation rather than rigid opinionation.

---

## Default Configuration

Below is the default configuration shipped with Coral:

```ts
// app.config.ts
import { createApp } from "vinxi";
import reactPlugin from '@vitejs/plugin-react';
import { serverFunctions } from "@vinxi/server-functions/plugin";
import { tanstackRouter } from '@tanstack/router-plugin/vite';

export default createApp({
  routers: [
    {
      type: "spa",
      name: "client",
      handler: "./index.html",
      plugins: () => [
        tanstackRouter({
          target: 'react',
          autoCodeSplitting: true,
        }),
        reactPlugin(),
        serverFunctions.client,
      ],
    },
    {
      type: "http",
      name: "api",
      handler: "./src/api.ts",
      plugins: () => [],
      base: "/api",
    },
    {
      type: "static",
      name: "static",
      dir: "./public",
    },
    serverFunctions.router(),
  ],
});
```

---

## Configuration Breakdown

### `createApp({ routers })`

The `createApp` function initializes the application with one or more **routers**. A router defines how different types of content (e.g., client-side apps, API routes, static assets) are served.

Each router entry defines:

* `type`: the nature of the route (e.g., `"spa"`, `"http"`, or `"static"`)
* `name`: an internal identifier
* `handler`: the file that should be executed or rendered
* `plugins`: an optional plugin stack for the specific router
* `base`: an optional base path prefix for routing

---

### SPA Router: Client-side Application

```ts
{
  type: "spa",
  name: "client",
  handler: "./index.html",
  plugins: () => [
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    reactPlugin(),
    serverFunctions.client,
  ],
}
```

* Defines the **client entry point** for the application
* Uses Vite's React plugin to support JSX and React fast refresh
* Integrates the TanStack Router plugin to enable file-based routing and route generation
* Includes client stubs for server functions to allow safe references from browser code (in development)

---

### HTTP Router: API Endpoint Handling

```ts
{
  type: "http",
  name: "api",
  handler: "./src/api.ts",
  plugins: () => [],
  base: "/api",
}
```

* Routes any request starting with `/api/` to `src/api.ts`
* Intended for implementing HTTP-based APIs such as REST, JSON endpoints, or server-side logic
* Plugins can be added in the future to support validation, authentication, or adapters for protocols like tRPC or GraphQL

---

### Static Router: Public Assets

```ts
{
  type: "static",
  name: "static",
  dir: "./public",
}
```

* Maps files from the `public/` directory directly to the root of the site
* Used for images, fonts, robots.txt, manifest files, and other static assets

---

### Server Functions Layer

```ts
serverFunctions.router()
```

* Enables server function execution through the [@vinxi/server-functions](https://github.com/vinxi/server-functions) plugin
* Supports the `"use server"` convention to denote backend-only logic modules
* Allows execution of server-side logic from API routes or (eventually) server-rendered components

---

## Customization

The Coral configuration is not rigid. You can:

* Add custom router types
* Introduce server middleware or observability tools
* Reorganize or split the configuration into multiple files, if preferred

This gives you flexibility akin to setting up your own stack, but with meaningful defaults in place.

For further info on how this works feel free to check out [Vinxi App API](https://vinxi.vercel.app/api/app.html) and [Vinxi Router API](https://vinxi.vercel.app/api/router.html).
