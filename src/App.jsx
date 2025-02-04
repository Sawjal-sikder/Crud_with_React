import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import ProductList from './assets/Component/Product/ProductList'
import Navbar from './assets/Component/Header/Navbar'
import ProductCreate from './assets/Component/Product/ProductCreate'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' Component={ ProductList } />
          <Route path='/create' Component={ ProductCreate } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
