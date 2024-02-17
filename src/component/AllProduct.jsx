import { Link, useLoaderData } from 'react-router-dom'


export default function AllProduct() {


  const products = useLoaderData()

  // console.log(products)
  return (
    <>
      <h1 className='text-center Product'>Prime Selection</h1>
      <div id='container'>
        {products.map(products => {
          const { id, title, price, image } = products
          return (
            <div key={id}>
            <h3>{title}</h3> <br />
              <Link to={`/products/${id}`}>
                <img src={image} className='image'/> <br />
              </Link>
            <h4 className='price'>£{price}</h4>
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