import { Navbar } from 'flowbite-react'
import './App.css'
import Login from './components/Login'
import {Routes , Route} from "react-router-dom"


function App() {

  return (
    <>
    <div className='text-blue-500'>hello</div>
    


    <Routes>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/dashboard_User" element ={<DashbaoardUser/>}/>
      <Route path="/dashboard_Agency" element ={<DashbaoardAgency/>}/>
      <Route path="/signup" element ={<Signup/>}/>
  
    </Routes>
    </>
  )
}

export default App
