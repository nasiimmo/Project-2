import { useLoaderData } from 'react-router-dom'

export default function AllProduct() {
  const product = useLoaderData()
  console.log(product)

  return <h1>Product List</h1>
}
