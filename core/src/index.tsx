//src/index.tsx
// console.log("Hello!")
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Route, Link, Router } from "wouter";
// import fileRoutes from "vinxi/routes";
// import { pathToRegexp  } from "path-to-regexp";

import { Counter } from "./components/Counter";
import { PostList } from "./components/PostList";


createRoot(document.getElementById('root')!).render(
<>
    <img src="./test.jpg" alt="test" width={200} height={200}/>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
    </nav>
    {/* {routes.map((route) =>(
        <Route path ={route.path} component={route.component} />
        ))} */}
    <Route path="/">
        <h1>Coral - A DX first minimalistic metaframework</h1>
        <Counter />
        
        </Route>
        <Route path="/posts">
        <PostList />
    </Route>
</>
);
