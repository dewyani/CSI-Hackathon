import React from "react";
import SidebarPage from "./SidebarPage";
import { Card } from "flowbite-react";
import { Button, Modal, Timeline } from "flowbite-react";
import { useState } from "react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import MyCard from "./MyCard";

const MyComplaints = (props) => {
  const [openModal, setOpenModal] = useState(false);
  // console.log(props.state[0]);
  return (
    <div class="flex h-screen">
      <div class="w-1/4">
        <SidebarPage />
      </div>

      <div class="w-3/4">
        <div className="font-bold text-xl text-gray-400 m-10">
          Current Account : {props.state[0]}
        </div>
        <div class="flex gap-4">
          <div class="w-5/12">
            <div className="flex-col space-y-2">
              <div className="font-bold text-xl text-gray-400 mb-6">In Progress</div>
              <MyCard/>
              <MyCard/>
            </div>
          </div>

          <div class=" w-5/12 ">
            <div className="flex-col space-y-2">
              <div className="font-bold text-xl text-gray-400 mb-6">
                Resolved Sucessfully
              </div>
              <MyCard/>
              <MyCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComplaints;
