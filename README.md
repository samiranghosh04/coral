# Coral - An Experimental DX First Meta Framework

Coral is an experimental, modern meta-framework designed to make fullstack development as smooth as possible. Featuring routing, server functions, full SPA mode, and an ergonomic React + Wouter setup — Coral focuses on a lightweight yet powerful developer experience.

---

## Features

- React + [Wouter](https://github.com/molefrog/wouter) for fast, minimal routing
- Optional file-based routing system (commented for now)
- Built-in **Server Functions** powered by Vinxi
- Fully SPA by default with support for HTTP & static routes
- Zero-config DX — write components, call server logic, ship!

---

## Installation

Clone this repo and install dependencies:


```bash
npm install
npx vinxi dev
```

---

## Project Structure

```bash
.
├── index.html               # SPA entry point
├── app.config.ts           # Vinxi app configuration
├── public/
│   └── test.jpg
├── src/
│   ├── index.tsx           # Client entry point (React + Wouter)
│   ├── api.ts              # HTTP handler
│   ├── getPosts.ts         # Server function
│   ├── pages/              # (optional) file-based routes
│   └── components/
│       ├── Counter.tsx
│       └── PostList.tsx
```

---

## Usage

### Client-Side

```tsx
// src/index.tsx
createRoot(document.getElementById('root')!).render(
  <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
    </nav>

    <Route path="/">
      <h1>Coral - A DX first minimalistic metaframework</h1>
      <Counter />
    </Route>

    <Route path="/posts">
      <PostList />
    </Route>
  </>
);
```

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
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
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

## Try it!

Run the app and visit:

* `/` → Home page with counter
* `/posts` → Server function powered blog list

---

## Built With

* [Vinxi](https://vinxi.dev/)
* [React](https://reactjs.org/)
* [Wouter](https://github.com/molefrog/wouter)
* [Vite](https://vitejs.dev/)
* [@vinxi/server-functions](https://vinxi.dev/docs/server-functions/)

---

## License

MIT

---

## Author

**Samiran Ghosh**

> Coral is a personal experiment in building fullstack frameworks with maximum developer joy and minimum config overhead. Contributions and ideas welcome!

## Features under Consideration

- File based routing based on TanStack Router
- SSG
- CLI for DX
- True SSR
- Vitest based testing

## Acknowledgements

I want to take a moment to thank the developers and engineering teams whose work, ideas, and content have inspired me throughout this journey:

- **Evan You** – for shaping the modern frontend landscape and showing what thoughtful design in frameworks looks like.  
- **Vite** – for redefining speed and simplicity in tooling.  
- **Vinxi** – for making meta-frameworks fun and surprisingly easy to work with.  
- **Vike** – for being a constant source of inspiration, especially around routing and SSR.
 **React** – for being the foundation and mindset behind Coral’s UI layer.  
- **Solid** – for pushing the boundaries of reactivity and performance in JavaScript frameworks.  
- **Svelte** – for showing us what compiler-first thinking can do to simplify UI development.  
- **TanStack** – for delivering brilliant, headless solutions across routing, tables, forms, and more — and for inspiring how I think about framework primitives.
- **Brenley Dueck** – for building tools and ideas that feel both practical and forward-looking.
- **Dev Agarwal** – for breaking down complex concepts in ways that actually stick.  
- **CodeTV** *(formerly Learn with Jason)* – for being that friendly guide into the world of fullstack development and beyond.  
- **Nitro** – for showing how powerful server architecture can still feel lightweight.

And to everyone I may have forgotten — whether you wrote a tool, shared a blog post, answered a question, or just put your ideas out into the world:  
**thank you.** You've made building Coral possible, and the process a lot more joyful.