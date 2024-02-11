import React from 'react'
import SidebarPage from './SidebarPage'
import { FileInput, Label, Textarea } from 'flowbite-react';
import { Button, TextInput } from 'flowbite-react';
import { useState } from 'react';

const LodgeComplaints = () => {

    const [formData, setFormData] = useState({
        name: '',
        sub: '',
        ACnO: '',
        comment: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted with data:', formData);
        alert("Form submitted successfully !")
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

        return (
            <div className='flex'>
                <SidebarPage />
                <div className='m-10'>
                    <div className='font-bold text-2xl text-gray-400 my-5'>Add Your Complaint</div>
                    <div className='flex w-screen'>

                        <div className='w-1/3 px-10'>
                            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                <div className='mb-2 block'>
                                    <label htmlFor="name">Agency Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className='mb-2 block'>
                                    <label htmlFor="name">Subject:</label>
                                    <input
                                        type="text"
                                        id="sub"
                                        name="sub"
                                        value={formData.sub}
                                        onChange={handleChange}
                                    />
                                </div>


                                <div className='mb-2 block'>
                                    <label htmlFor="name">Aadhar Card No.:</label>
                                    <input
                                        type="text"
                                        id="ACnO"
                                        name="ACnO"
                                        value={formData.ACnO}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className='mb-2 block'>
                                    <label htmlFor="name">Subject:</label>
                                    <input
                                        type="text"
                                        id="comment"
                                        name="comment"
                                        value={formData.comment}
                                        onChange={handleChange}
                                    />
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
}

export default LodgeComplaints