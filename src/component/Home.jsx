import { Link } from 'react-router-dom'

// background image
import backgroundImage from '../images/background.png' 


export default function Home(){
  return (
   <section className='center'>
    {/* <img className='brandlogo ' src={brandImage} alt='logo' /> */}
    {/* <Link to='/allproduct' className='btn'>View Products</Link> */}
    <Link to='/'><img className='background' src={backgroundImage} alt='background'/></Link>
   </section>
  )
}