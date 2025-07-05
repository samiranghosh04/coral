
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="">
        <Link to="/" className="">
          Home
        </Link>{' '}
        <Link to="/posts" className="">
          Posts
        </Link>
        <Link to="/about" className="">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})