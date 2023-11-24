import { useState } from 'react'
import { Link } from 'react-router-dom'
// Images
import logoIcon from '../images/logo.png'

// Bootstrap Components
import Modal from 'react-bootstrap/Modal'


export default function Nav() {


  const [show, setShow] = useState(false)

  return (
    <>
      <header className='header'>
        <Link to='/'><img className='logo' src={logoIcon} alt='brand logo'/></Link>
        
          {/* <Link to='/'>Home</Link>&nbsp;
          <Link to='/products'>AllProduct</Link>&nbsp;
          <Link to='/products'>SingleProduct</Link> */}
        
        <button className='nav-toggle' onClick={() => setShow(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header >

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <nav onClick={() => setShow(false)}>
          <Link to='/'>Home</Link>&nbsp;
          <Link to='/products'>All Product</Link>&nbsp;
          </nav>
        </Modal.Header>
      </Modal>
    </>
  )
}








