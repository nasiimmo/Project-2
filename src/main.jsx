import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Page components
import App from './App.jsx'
import Home from './component/Home'
import AllProduct from './component/AllProduct'
import SingleProduct from './component/SingleProduct'

// Loader
import { getAllProduct, getSingleProduct } from './utils/loaders/products.js'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <AllProduct />,
        loader: getAllProduct
      },
      {
        path: '/products/:productId',
        element: <SingleProduct />,
        loader: async ({ params }) => getSingleProduct(params.productId)

      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
