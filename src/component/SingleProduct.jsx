import { useLoaderData } from 'react-router-dom'

export default function SingleProduct(){
  const items = useLoaderData()
  console.log(items) 
  return (
    <h1>Single Product</h1>
    
  )
}