import { Navbar } from "flowbite-react";
import "./App.css";
import DashboardAgency from "./components/DashboardAgency";
import DashboardUser from "./components/DashboardUser";
import Signup from "./components/Signup";
import Login from "./components/Login";
import History from "./components/History";
import { Routes, Route } from "react-router-dom";
import MyComplaints from "./components/MyComplaints";
import LodgeComplaints from "./components/LodgeComplaints";
import Statistics from "./components/Statistics";
import Timeline from "./components/Timeline";
import { useState, useEffect } from "react";
import abi from "./contractJson/Complaint.json";
import { ethers } from "ethers";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected");
  useEffect(() => {
    const template = async () => {
      const contractAddress = "0x9158544C4d160778aa8AB003F6421365da6e64D1";
      const contractABI = abi.abi;
      //Metamask part

      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(account);
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        setState({ provider, signer, contract });
      } catch (error) {
        console.log("Ether error");
        alert(error);
      }
    };
    template();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard_User" element={<DashboardUser />} />
        <Route path="/dashboard_Agency" element={<DashboardAgency />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard_User/history" element={<History />} />
        <Route
          path="/dashboard_User/myComplaints"
          element={<MyComplaints state={account} />}
        />
        <Route path="/dashboard_User/lodge" element={<LodgeComplaints />} />
        <Route path="/dashboard_Agency/stats" element={<Statistics />} />
        <Route path="/dashboard_Agency/timeline" element={<Timeline />} />
      </Routes>
    </>
  );
}

export default App;
