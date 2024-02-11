import React from "react";
import SidebarAgency from "./SideBarAgency";
import LineChart from "./LineChart";
import Chart_Stats from "./Graph";
import Traffic from "./Traffic";
import Graph from "./Graph";

const Statistics = () => {
  return (
    <>
      <div className="flex">
        <SidebarAgency />

        <div className="flex flex-col mx-auto p-10 w-full h-full justify-center items-center gap-10">
          <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white mb-4">Weekly Complaint Analysis</h2>

          <LineChart/>
          

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"> */}
          {/* <div className="flex mx-auto gap-4"> */}
            {/* <div className="flex m-6 flex-col justify-center items-center">
              <h4 className="text-lg font-bold mx-auto">Complaint Traffic</h4>
              <Traffic />
            </div> */}

            {/* <div> */}
            <h4 className="text-2xl mx-auto font-bold p-4">Complaint Traffic</h4>

                 <Graph/>
            </div>
          {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Statistics;
