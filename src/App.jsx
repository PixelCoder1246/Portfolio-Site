import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/AboutPage/About';
import Home from './components/HomePage/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <div className='main'><div className='error1'>
        Under Maintenance!!</div><video autoPlay muted loop src="../public/assets/error.mp4"></video></div>,
    },
    {
      path: '/about',
      element: <About />,
    }
  ])

  return <RouterProvider router={router}/>;
}

export default App