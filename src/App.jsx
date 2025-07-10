import {createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import NotFoundPage from './Components/NotFoundPage/NotFoundPage.jsx'
import Home from './Components/Home/Home.jsx'
import Menu from './Components/Menu/Menu.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import './App.css'
function App() {

  
  let router = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Home/> },
        { path: "menu", element: <Menu/> },
        { path: "contact", element: <Contact/> },
        { path: "about", element: <About/> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ])
  return (
    <>
          <RouterProvider router={router}></RouterProvider> 
    </>
  )
}

export default App
