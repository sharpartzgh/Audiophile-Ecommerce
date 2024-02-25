import React from 'react'
import './App.css'
import Homepage from './Pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import Earphones from './Pages/Earphones'
import Speakers from './Pages/Speakers'
import Headphones from './Pages/Headphones'
import Header from './components/Header/Header'
import DetailPage from './Pages/DetailPage'
import CheckoutCard from './components/Checkout/CheckoutCard'

function App(){
  return (
    <>
      <div className="app__wrapper min-h-screen bg-[#FAFAFA]">
        <Header/> 
        <div className="Router__wrapper">
          <Routes>
            <Route path="/Home" element={<Homepage/>}/>
            <Route path="/Headphones" element={<Headphones/>}/>
            <Route path="/Speakers" element={ <Speakers/>}/>
            <Route path="/Earphones" element={<Earphones/>}/>
            <Route path="/DetailPage" element={<DetailPage/>}/>
            <Route path='/checkout' element={ <CheckoutCard/> }/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App

