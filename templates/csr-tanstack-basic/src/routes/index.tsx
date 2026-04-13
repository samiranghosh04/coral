import { createFileRoute } from '@tanstack/react-router'
import { Counter } from '../components/Counter'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="">
       {/* <img src="./test.jpg" alt="test" width={200} height={200}/> */}
      <h1>Coral - A DX first minimalistic metaframework</h1>
      <Counter />
    </div>
  )
}