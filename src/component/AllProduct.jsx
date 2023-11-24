import { Link, useLoaderData } from 'react-router-dom'


export default function AllProduct() {


  const products = useLoaderData()
 
  // console.log(products)
  return (
    <>
      <h1 className='text-center bold display-3 mb-4'>Product List</h1>
      <div className='container'>
        {products.map(products => {
          const { id, title, price, description, image, rating } = products
          return (
            <div key={id}>
              {title} <br />
              <Link to={`/products/${id}`}>
                <img src={image} /> <br />
              </Link>
              {description} <br />
              {rating[0]} <br />
              {price}
            </div>
          )
        })}
        </div>

      </>
      )
}







      {/* <div className='container'>
{products.map((product, index) => {
  // {console.log(product.title)}
  return <div key={index}>
    {product.title} <br/> 
    <img src={product.image} {Link to=}/> <br/> 
    {product.description} <br/> 
    {product.rating.rate}
    </div>
})}
</div> */}










        // import {useLoaderData} from 'react-router-dom'


        // export default function AllProduct() {
        //   const items = useLoaderData()
        //   console.log(items)



        //   return (
        //     <div className='container'>
        //       <h1>AllProduct</h1>

        //     </div>
        //   )

        // }




        {/* <Container fluid>
<Row className='product-list'>
{products.map((product, index) => {
    
    return (
      <Col
        as={Link}
        key={index}
        xs={6}
        md={4}
        lg={3}
        style={{ backgroundImage: `url(${product.image})` }}
        to={`/products/${index}`}
      >
        {product}
      </Col>
    )
  })}
</Row>
</Container>  */}