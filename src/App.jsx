import { Navbar } from 'flowbite-react'
import './App.css'
import DashboardAgency from "./components/DashboardAgency"
import DashboardUser from './components/DashboardUser'
import Signup from './components/Signup'
import Login from './components/Login'
import History from './components/History'
import {Routes , Route} from "react-router-dom"
import MyComplaints from './components/MyComplaints'
import LodgeComplaints from './components/LodgeComplaints'


function App() {

  return (
    <>
    <div className='text-blue-500'>hjnkjagsrn</div>

    <Routes>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/dashboard_User" element ={<DashboardUser/>}/>
      <Route path="/dashboard_Agency" element ={<DashboardAgency/>}/>
      <Route path="/signup" element ={<Signup/>}/>
      <Route path="/history" element ={<History/>}/>
      <Route path="/myComplaints" element ={<MyComplaints/>}/>
      <Route path="/lodge" element ={<LodgeComplaints/>}/>
    </Routes>
    </>
  )
}

export default App
