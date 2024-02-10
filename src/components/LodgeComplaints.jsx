import React from 'react'
import SidebarPage from './SidebarPage'
import { FileInput, Label } from 'flowbite-react';

const LodgeComplaints = () => {
    return (
        <div className='flex'>
            <SidebarPage />
            <div className='m-10 w-full'>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="file-upload" value="Complaint Related Doc" />
                    </div>
                    <FileInput id="file-upload" />
                </div>
            </div>
        </div>
    )
}

export default LodgeComplaints