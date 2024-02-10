import { Navbar } from 'flowbite-react'
import './App.css'
import DashboardAgency from "./components/DashboardAgency"
import DashboardUser from './components/DashboardUser'
import Signup from './components/Signup'
import Login from './components/Login'
import {Routes , Route} from "react-router-dom"


function App() {

  return (
    <>
    <div className='text-blue-500'>hjnkjagsrn</div>
    


    <Routes>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/dashboard_User" element ={<DashboardUser/>}/>
      <Route path="/dashboard_Agency" element ={<DashboardAgency/>}/>
      <Route path="/signup" element ={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App
