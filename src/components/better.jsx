import React from 'react'
import SidebarPage from './SidebarPage'
import { FileInput, Label, Textarea } from 'flowbite-react';
import { Button, Checkbox, TextInput } from 'flowbite-react';


const LodgeComplaints = () => {
    return (
        <div className='flex'>
            <SidebarPage />
            <div className='m-10'>
                <div className='font-bold text-2xl text-gray-400 my-5'>Add Your Complaint</div>
                <div className='flex w-screen'>
                    <div className='w-1/3 px-10'>
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Agency Name" />
                            </div>
                            <TextInput id="name" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="sub" value="Complaint Subject" />
                            </div>
                            <TextInput id="sub" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="ACnO" value="Aadhar Card Number" />
                            </div>
                            <TextInput id="ACnO" type="text" required />
                        </div>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="comment" value="Your message" />
                            </div>
                            <Textarea id="comment" placeholder="Describe your complaint with complete details..." required rows={4} />
                        </div>

                        <Button type="submit">Submit</Button>
                    </form>
                    </div>

                    <div className='justify-center items-center w-1/4'>
                        <div className="mb-2 block">
                            <Label htmlFor="file-upload" value="Complaint Related Doc" />
                        </div>
                        <FileInput id="file-upload" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default LodgeComplaints

