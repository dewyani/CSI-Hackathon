import React from "react";
import { Datepicker } from "flowbite-react";
import SideBarAgency from "./SideBarAgency";
import SearchBar from "./SearchBar";
import { Table, Button } from "flowbite-react";
import { useState } from "react";

const Timeline = ({ comp, update }) => {
  const [buttonText, setButtonText] = useState("Under Review");
  const [buttonColor, setButtonColor] = useState("yellow");
  // const compArray = comp.comp[0];
  // console.log(compArray());
  console.log(update());

  const handleClick = () => {
    update();
    // console.log(update());
    setButtonText("Resolved");
    setButtonColor("green");
  };
  return (
    <div className="flex">
      <SideBarAgency />
      <div>
        <div className="font-bold text-xl text-gray-400 m-10">
          Search by Date or Name
        </div>
        <div className="flex">
          <div className="m-5 flex space-x-10">
            <SearchBar />
            <Datepicker />
          </div>
        </div>

        <div className="font-bold text-xl text-gray-400 m-10">
          Your Search Results
        </div>
        <div className="m-5">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Agency</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {"Neerja Doshi"}
                </Table.Cell>
                <Table.Cell> ResolveNow Inc.</Table.Cell>
                <Table.Cell>
                  Poor customer service received at the local tax office. Staff
                  was unhelpful and rude
                </Table.Cell>
                <Table.Cell> February 15, 2024</Table.Cell>
                <Table.Cell>
                  <Button
                    onClick={handleClick}
                    className={`bg-${buttonColor}-500 text-white font-bold py-2 rounded`}
                  >
                    {buttonText}
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Dewyani Deshmukh
                </Table.Cell>
                <Table.Cell>Grievance Solutions</Table.Cell>
                <Table.Cell>
                  "Online tax portal malfunctioning, unable to submit tax forms
                  electronically
                </Table.Cell>
                <Table.Cell>May 7, 2024</Table.Cell>
                <Table.Cell>
                  <Button color="success"> Resolved </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {" "}
                  Priyanka K
                </Table.Cell>
                <Table.Cell>Citizen Care Services</Table.Cell>
                <Table.Cell>
                  Delayed response from the public services department regarding
                  the issuance of permits.
                </Table.Cell>
                <Table.Cell>September 20, 2023</Table.Cell>
                <Table.Cell>
                  {" "}
                  <Button color="success"> Resolved </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Apulki
                </Table.Cell>
                <Table.Cell>Old Age Care Services</Table.Cell>
                <Table.Cell>
                  Delayed response from the public services department regarding
                  the issuance of permits.
                </Table.Cell>
                <Table.Cell>September 30, 2023</Table.Cell>
                <Table.Cell>
                  {" "}
                  <Button color="success"> Resolved </Button>{" "}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
