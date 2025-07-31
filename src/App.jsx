import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Cryptocurrencies from "./components/Cryptocurrencies"
import Exchanges from "./components/Exchanges"
import News from './components/News'
import AppLayout from './components/AppLayout'
import Home from './components/Home'


const router = createBrowserRouter([
    {
    path:'/',
    element:<AppLayout/>,
    children:[{
      path:'/',
      element:<Home/>,
    },
    {
      path:'currencies',
      element:<Cryptocurrencies/>,
    },{
      path:'exchange',
      element:<Exchanges/>,
    },
    {
      path:'news',
      element:<News/>,
    }
  
  
  
  
  
  
  
  ]
  }
])
function App() {
  
  return (
  
    <RouterProvider router={router}></RouterProvider>
       
    
  )
}

export default App