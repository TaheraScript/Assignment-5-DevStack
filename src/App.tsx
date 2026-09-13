import Navbar from './Component/Layout/Navbar'
import Banner from './Component/Banner/Banner'
import Tech from './Component/TechStack/Tech'
import Footer from './Component/Layout/Footer'
import { Suspense } from 'react'
import type { ITechType } from './Component/Type/ITechType'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' 
import './App.css'

const techPromise = async (): Promise<ITechType[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data;
}

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<p>Loading...</p>}>
        <Tech techPromise={techPromise()}></Tech>
      </Suspense>
      <Footer></Footer>
      <ToastContainer position="top-right" autoClose={2000} /> 
    </>
  )
}

export default App