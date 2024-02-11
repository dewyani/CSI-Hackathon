import React from "react";
import { Table } from "flowbite-react";
import SidebarPage from "./SidebarPage";
import { useState, useEffect } from "react";

const History = (comp) => {
  const compArray = comp.comp[0];

  return (
    <div className="flex">
      <SidebarPage />
      <div className="overflow-x-auto m-20 w-full">
        <Table hoverable className="shadow-md border-collapse border">
          <Table.Head>
            <Table.HeadCell className="bg-purple-400 bg-opacity-75">Name</Table.HeadCell>
            <Table.HeadCell className="bg-purple-400 bg-opacity-75">Agency</Table.HeadCell>
            <Table.HeadCell className="bg-purple-400 bg-opacity-75">Description</Table.HeadCell>
            <Table.HeadCell className="bg-purple-400 bg-opacity-75">Date</Table.HeadCell>
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
            </Table.Row>

            {compArray && compArray.map((item, index) => (
              <Table.Row className=" flex flex-col bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="flex whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item}
                </Table.Cell>
                <Table.Cell>{item}</Table.Cell>
                <Table.Cell>{item}</Table.Cell>
                <Table.Cell>{item}</Table.Cell>
                <Table.Cell>September 30, 2023</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default History;
