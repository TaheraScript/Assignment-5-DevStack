import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Tech from './Component/Technologies/Tech'
import './App.css'
import { Suspense } from 'react'
import type { ITechType } from './Component/Type/ITechType'
import Footer from './Component/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' 

const techPromise = async (): Promise<ITechType[]> => {
  const res = await fetch('/public/data.json')
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