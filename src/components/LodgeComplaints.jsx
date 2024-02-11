import React from "react";
import SidebarPage from "./SidebarPage";
import { FileInput, Label, Textarea } from "flowbite-react";
import { Button, Checkbox, TextInput } from "flowbite-react";
import { useState } from "react";

const LodgeComplaints = ({ register }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    addr: "",
    ACnO: "",
    comment: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
    alert("Form submitted successfully !");
    register(
      formData.name,
      formData.username,
      formData.addr,
      formData.ACnO,
      formData.comment
    );
  };

  const handleChange = (event) => {
    // event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex">
      <SidebarPage />
      <div className="m-10">
        <div className="font-bold text-2xl text-gray-400 my-5">
          Add Your Complaint
        </div>
        <div className="flex w-screen">
          <div className="w-1/3 px-10">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="sub" value="Agency Name" />
                </div>
                <TextInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="sub" value="Complainants name" />
                </div>
                <TextInput
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="sub" value="Address" />
                </div>
                <TextInput
                  type="text"
                  id="addr"
                  name="addr"
                  value={formData.addr}
                  onChange={handleChange}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="sub" value="Aadhar Card Number" />
                </div>
                <TextInput
                  type="text"
                  id="ACnO"
                  name="ACnO"
                  value={formData.ACnO}
                  onChange={handleChange}
                />
              </div>

              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="sub" value="You Complaint" />
                </div>
                <Textarea
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

          <div className="justify-center items-center w-1/4">
            <div className="mb-2 block">
              <Label htmlFor="file-upload" value="Complaint Related Doc" />
            </div>
            <FileInput id="file-upload" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LodgeComplaints;
