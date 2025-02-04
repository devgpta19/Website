import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MidSection from "./Components/MidSection";
import JobProfile from "./Components/JobProfile";
import Interview from "./Components/Interview";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import HomeDEV from "./Components/HomeDEV"
import Featured from "./Components/Featured"
import JobDescription from "./Components/JobDescription";


function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element : (<>
                  <HomeDEV />
                  <Featured />
                  <Footer />
                </>)
    },
    {
      path : '/careers',
      element : (<>
                  <HeroSection />
                  <JobProfile />
                  <MidSection />
                  <Interview />
                  <Footer />
                </>)
    },
    {
      path : '/job-description/:jobid',
      element : (<>
                  <JobDescription />
                </>)
    },
    {
      path : '/apply/:jobid',
      element : (<>
                  <Form />
                </>)
    }
  ])
  return (
    <RouterProvider router ={router} />
  )
}

export default App