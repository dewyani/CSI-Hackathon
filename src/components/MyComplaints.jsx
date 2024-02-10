import React from 'react'
import SidebarPage from './SidebarPage'
import { Card } from 'flowbite-react';
import { Button, Modal, Timeline } from 'flowbite-react';
import { useState } from 'react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import MyCard from './MyCard';



const MyComplaints = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className='flex'>
            <SidebarPage />
            <div className='flex-col m-10 space-y-2'>
                <div className='font-bold text-xl text-gray-400'>In Progress</div>
                <MyCard/>
                <MyCard/>
            </div>
            <div className='flex-col m-10 space-y-2'>
                <div className='font-bold text-xl text-gray-400'>Resolved Successfully</div>
                <MyCard/>
                <MyCard/>
            </div>
        </div>
    )
}

export default MyComplaints