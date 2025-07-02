import React from 'react'
import Sidebar from './comp/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Add from './pages/Add/Add'
import './index.css'
import Orders from './pages/Orders/Orders'
import List from './pages/List/List'
import {useState} from 'react'
import Login from './comp/Login/Login'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'

export const backendUrl="http://localhost:4000"

const App = () => {
  const [token, setToken]=useState(localStorage.getItem("token" || ""));
  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])
  return (
    <div className="app-container">
      <ToastContainer/>
    {/*  <hr className="app-divider" /> */}
    {
      token===""? (
        <Login setToken={setToken}/>
      ):
      (
        <div className="app-content">
       <Sidebar setToken={setToken}/>
       <div className="page-content">
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
       </div>
      </div>
      )
    }
      
    </div>
  )
}

export default App
