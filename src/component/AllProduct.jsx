import { useLoaderData } from 'react-router-dom'


export default function AllProduct() {


  const products = useLoaderData()
  console.log(products)
  return (
    <>
      <h1 className='text-center bold display-3 mb-4'>Product List</h1>
      <div className='container'>
      {products.map((product, index) => {
        // {console.log(product.title)}
        return <div key={index}>
          {product.title} <br/> 
          <img src={product.image}/> <br/> 
          {product.description} <br/> 
          {product.rating.rate}
          </div>
      })}
      </div>
    </>
  )
}

















// import { useLoaderData } from 'react-router-dom'


// export default function AllProduct() {
//   const items = useLoaderData()
//   console.log(items)


 
//   return (
//     <div className='container'>
//       <h1>AllProduct</h1>
      
//     </div>
//   )

// }
