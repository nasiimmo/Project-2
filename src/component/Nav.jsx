
import { Link } from 'react-router-dom'
// Images
import logoIcon from '../images/Project-2-img.png'



export default function Nav() {



  return (
    <>
      <header className='header'>
        <div>
        <Link to='/'><img className='logo' src={logoIcon} alt='brand logo' /></Link>
        </div>
        {/* <Link to='/'>Home</Link>&nbsp;
          <Link to='/products'>AllProduct</Link>&nbsp;
          <Link to='/products'>SingleProduct</Link> */}
          <div>
        <h2 className="welcome">Your journey begins here </h2>
        </div>
        <div>
        <li className='nav-item'>
          <Link to='/' className='nav-link' style={{ color: 'black' }}>Home</Link>&nbsp;
        </li>
        <li className='nav-item'>
          <Link to='/products' className='nav-link' style={{ color: 'black' }}>Browse</Link>&nbsp;
        </li>
        </div>
      </header >
    </>
  )
}








