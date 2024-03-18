import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './Pages/LandingPage.jsx'
import ServicePage from './Pages/ServicesPage.jsx'
import ContactPage from './Pages/ContactPage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ServicePageResidential from './Components/ServicesPageResidential.jsx'
import ServicePageCommercial from './Components/ServicesPageCommercial.jsx'
import ServicePageStormDamage from './Components/ServicesPageStormDamage.jsx'
import ServicePageCopper from './Components/ServicesPageCopper.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/services/',
    element: <ServicePage />,
    children: [ 
      {
        path: 'residential',
        element: <ServicePageResidential />,
      },
      {
        path: 'commercial',
        element: <ServicePageCommercial />,
      },
      {
        path: 'stormdamage',
        element: <ServicePageStormDamage />,
      },
      {
        path: 'copperroofing',
        element: <ServicePageCopper />,
      },
    ],
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
