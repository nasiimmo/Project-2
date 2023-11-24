import { useLoaderData } from 'react-router-dom'

export default function SingleProduct() {
  const item = useLoaderData()
  // console.log(item)
  const {id, title, price, description, image, rating} = item
  
  return (
    <>
    <h1>Single Product</h1>
    <div key={id}>
          {title} <br/> 
          <img src={image}/> <br/> 
          {description} <br/> 
          {price}  <br />
          {rating[0]} 
          </div>
      </>
  )
}




// const product = useLoaderData()
  
// console.log(product)

// return (
//   <>
//     <h1>Single Product</h1>
//     {product.map((product, index) => {
//       // {console.log(product.title)}
//       return <div key={index}>
//         {product.title} <br />
        
//         <img src={product.image} /> <br />
        
//         {product.description} <br />
//         {product.rating.rate}
//       </div>
//     })}
//   </>
// )
// }