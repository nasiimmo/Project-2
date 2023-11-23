export async function getAllProduct(){
  const res = await fetch('https://fakestoreapi.com/products')
  return res.json()
}

export async function getSingleProduct(id){
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  return res.json()
}