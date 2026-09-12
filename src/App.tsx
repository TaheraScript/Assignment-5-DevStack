import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Tech from './Component/Technologies/Tech'
import './App.css'
import { Suspense } from 'react'
import type { ITechType } from './Component/Type/ITechType'


const techPromise =async () :Promise<ITechType[]>=>{
        const res = await fetch('/public/data.json')
        const data = await res.json()
        return data;
    }

function App() {
console.log(techPromise)
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<p>Loading...</p>}>
         <Tech techPromise ={techPromise()}></Tech>
      </Suspense>
     
     

    </>
  )
}

export default App
