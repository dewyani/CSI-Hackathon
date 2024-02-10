import React from "react";
import Login_Navbar from "./Login_Navbar";
import login from "../images/login.jpg";

import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import { Accordion } from 'flowbite-react';


const Login = () => {
  return (
    <>
      {/* <Login_Navbar/> */}

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-10 md:flex-row flex-column items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mx-auto mb-19 pb-6 font-medium text-gray-900  ">
              Support Sync
            </h1>
            <p class="mb-8 leading-relaxed text-center">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
              swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              earum corporis consequatur ipsa aut!
            </p>

            <div className="flex justify-center items-center mx-auto ">
              <Button gradientDuoTone="purpleToBlue"><a href="/signup" className="nodecor">
                Login 
              </a></Button>
            </div>

            <div class="flex w-full md:justify-start justify-center items-end">
              <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4"></div>
            </div>

            <div class="flex lg:flex-row md:flex-col"></div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded w-50px h-50px"
              alt="hero"
              src={login}
            />
          </div>
        </div>
      </section>

      

      <div className="flex flex-col justify-center items-center p-16">

      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">
        Key Features of Our Complaint Management System</h1>
        <h5 className="mb-12 text-lg">  Efficiently manage and resolve complaints with our powerful features</h5>

        <div className="flex gap-6 mb-8">
          <Card href="#" className="w-1/2">
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
        <div className="flex gap-6">
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
         <p className="mb-12 text-center w-300">
          Our complain management system helps businesses effectively manage and resolve customer complaints. 
          With our user-friendly platform, you can easily track, prioritize, and respond to complaints, ensuring customer satisfaction and loyalty.
         </p>

         <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>What is Flowbite?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Is there a Figma file available?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
 


         
      </div>


      
    </>
  );
};

export default Login;
