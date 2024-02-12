import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [complaint, setComplaint] = useState("");

  const handleClick = (value) => {
    setRating(value);
    console.log("Rating:", value);
  };

  const handleComplaintChange = (event) => {
    setComplaint(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Rating:", rating);
    console.log("Complaint:", complaint);
    // You can add further logic here, such as submitting the rating and complaint to a backend server
  };

  return (
    <div className="flex justify-center items-center flex-col gap-5 my-5 p-5 mx-auto shadow-md border-collapse border w-1/4">
      <div>
        <h2 className="text-xl font-bold mb-2">Submit Your Feedback</h2>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={
              star <= rating
                ? "text-yellow-500 cursor-pointer text-3xl"
                : "cursor-pointer text-3xl"
            }
            onClick={() => handleClick(star)}
          >
            ★
          </span>
        ))}
      </div>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your Review" />
          </div>
          <TextInput id="password1" type="text" required />
        </div>
        <Button type="submit" className="mb-5">Submit</Button>
      </form>
    </div>
  );
};

export default StarRating;
