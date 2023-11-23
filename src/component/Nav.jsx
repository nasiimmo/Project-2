import { Link } from 'react-router-dom'



export default function Nav() {

  return (
    <>
      <nav>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/products'>AllProduct</Link>&nbsp;
        <Link to='/products'>SingleProduct</Link>
      </nav>
    </>
  )
}
// <header className='p-2 p-md-3 p-lg-4'>
//   <Link to='/'><img className='logo-icon' src={logoIcon} alt='brand logo' /></Link>
//   <button className='nav-toggle' onClick={() => setShow(true)}>
//     <span></span>
//     <span></span>
//     <span></span>
//   </button>
// </header>