//routes/posts.tsx
import { createFileRoute } from '@tanstack/react-router'
import { PostList } from '../components/PostList'

export const Route = createFileRoute('/posts')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <PostList />
    </>
  )
}