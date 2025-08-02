import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store.js'; 

import Cryptocurrencies from "./components/Cryptocurrencies";


import AppLayout from './components/AppLayout';
import Home from './components/Home';
import Details from './components/Details.jsx';
import CryptoDetails from './components/Cryptodetails'; // ✅ Import this

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'currencies',
        element: <Cryptocurrencies />,
      },
      {
        path: 'details',
        element: <Details />,
      },
      
      {
        path: 'crypto/:coinId',
        element: <CryptoDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
