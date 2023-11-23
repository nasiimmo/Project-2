
import { Link } from 'react-router-dom'
// Images
import logoIcon from '../images/logo.png'


export default function Nav() {

  return (
    <>
      <header className='p-2 p-md-3 p-lg-4'>
        <Link to='/'><img className='logo.png' src={logoIcon} alt='brand logo' /></Link>
        <nav>
          <Link to='/'>Home</Link>&nbsp;
          <Link to='/products'>AllProduct</Link>&nbsp;
          <Link to='/products'>SingleProduct</Link>
        </nav>
        <button>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header >
    </>
  )
}








