import React from 'react'
import { Button, Navbar } from 'flowbite-react';

const Login_Navbar = () => {
  return (
    <>
      <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Support Sync</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Login</Button>
        <Navbar.Toggle />
      </div>
      
    </Navbar>
    </>
  )
}

export default Login_Navbar