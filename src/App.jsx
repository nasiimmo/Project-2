
import { Outlet } from 'react-router-dom'
// Custom components
import Nav from './component/Nav'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
export default App
