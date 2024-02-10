import React from "react";
import Login_Navbar from "./Login_Navbar";
import login from "../images/login.jpg";

import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import { Accordion } from 'flowbite-react';
import {useTypewriter,Cursor, Typewriter} from 'react-simple-typewriter';

const Login = () => {
  return (
    <>
      {/* <Login_Navbar/> */}

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-column items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {/* <h1 class="title-font sm:text-6xl font-500 text-3xl mx-auto mb-19 pt-3 pb-12 font-medium text-gray-900  ">
              Support Sync
            </h1> */}
         <div className="container mx-auto text-center pb-12">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Welcome to Sahayta
          <br/>
          <span className="text-3xl text-blue-600">
              <Typewriter
              loop 
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={70}
              delaySpeed={1000}

              words={[' which effectively handles customer complaints','Experience a new era of complaint handling']}
              />
          </span>
          
        </h1>
      </div>

            

            <p className=" mb-8 leading-relaxed text-center  w-3/4 mx-auto text-1.5rem ">
                  Every business needs an online complaint system that provides multichannel capabilities, advanced reporting functionalities as well as a platform for cross-functional collaboration and immediate customer feedback system.
</p>



            <div className="flex justify-center items-center mx-auto ">
              <Button gradientDuoTone="purpleToBlue" className="w-60 "><a href="/signup" className="nodecor text-1xl">
                Login 
              </a></Button>
            </div>

            <div class="flex w-full md:justify-start justify-center items-end">
              <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4"></div>
            </div>

            <div class="flex lg:flex-row md:flex-col"></div>
          </div>

          <div className="w-3/12">
            <img
              className="object-cover object-center rounded w-50px h-50px pl-2 pr-"
              alt="hero"
              src={login}
              
            />
          </div>
        </div>
      </section>

      

      <div className="flex flex-col justify-center items-center p-16 w-full">

      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">
        Key Features of Our Complaint Management System</h1>
        <h5 className="mb-12 text-lg">  Efficiently manage and resolve complaints with our powerful features</h5>

        <div className="flex gap-6 mb-8 w-10/12 pl-3">
          <Card href="#" className="w-1/2 ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Complaint Submission
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Users can easily submit their compliants through the system.
            </p>
          </Card>

          <Card href="#" className="w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Complaint Tracking
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
               Users can view status of thier complaints.
            </p>
          </Card>
        </div>
        <div className="flex gap-6 w-10/12 pl-3">
          <Card href="#" className="w-1/2 ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Review History
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Users can view all their previous complaints.
            </p>
          </Card>

          <Card href="#" className="w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Analytics and Reports
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Generate comprehensive reports and analyze complaint data for better management.
            </p>
          </Card>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-20"> 
         <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">
         Streamline Your Complaint Handling Process
         </h1>
         <p className="mb-8 text-center w-8/12 mt-3">
          Our complain management system helps businesses effectively manage and resolve customer complaints. 
          With our user-friendly platform, you can easily track, prioritize, and respond to complaints, ensuring customer satisfaction and loyalty.
         </p>

       <div className="flex flex-col justify-center items-center p-20">

  <Accordion collapseAll className="w-6/8 pr-6">
    <Accordion.Panel>
      <Accordion.Title>How can a complain management system benefit my customers</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-prose">
          A complaint management system allows customers to easily submit their complaints, track the progress of their complaints, and receive timely updates on the resolution. This improves transparency and customer experience.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>What is a complaint management system?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-prose">
          A complaint management system is a software tool or platform that helps agents handle and resolve customer complaints.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>Why should anyone use a complaint management system?</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-prose">
          Using a complaint management system can streamline your complaint handling process and improve efficiency.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
  </Accordion>

</div>


         
      </div>


      
    </>
  );
};

export default Login;
