import { Link } from 'react-router-dom'

// Logo
import brandImage from '../images/logo.png'

export default function Home(){
  return (
   <section className='center'>
    <img className='brandlogo ' src={brandImage} alt='logo' />
    <Link to='/allproduct' className='btn'>View Products</Link>
   </section>
  )
}