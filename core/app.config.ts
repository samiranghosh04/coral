//app.config.ts
import {createApp, resolve} from "vinxi";
import reactPlugin from '@vitejs/plugin-react';
import { serverFunctions } from "@vinxi/server-functions/plugin";
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default createApp({
    routers: [{
        type: "spa",
        name: "client",
        handler: "./index.html",
        plugins: () => [
          tanstackRouter({
            target: 'react',
            autoCodeSplitting: true,
          }),
          reactPlugin(),
          serverFunctions.client],
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
        dir: "./public"
      },
      serverFunctions.router(),
    ]
})