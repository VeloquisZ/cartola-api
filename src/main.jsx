import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import Jogadores from './jogadores.jsx'


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/jogadores/:id', element: <Jogadores /> }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  //</React.StrictMode>,
)
