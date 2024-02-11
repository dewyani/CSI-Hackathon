import "./App.css";
import DashboardAgency from "./components/DashboardAgency";
import DashboardUser from "./components/DashboardUser";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Hindi from "./components/Hindi";
import History from "./components/History";
import { Routes, Route } from "react-router-dom";
import MyComplaints from "./components/MyComplaints";
import LodgeComplaints from "./components/LodgeComplaints";
import Statistics from "./components/Statistics";
import Timeline from "./components/Timeline";
import { useState, useEffect } from "react";
import abi from "./contractJson/Complaint.json";
// import { ethers, parseUnits } from "ethers";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected");
  const [complaints, setComplaints] = useState([]);


  useEffect(() => {
    const template = async () => {
      const contractAddress = "0x9158544C4d160778aa8AB003F6421365da6e64D1";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(account);
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        setState({ provider, signer, contract });
        fetchComplaints();
      } catch (error) {
        console.log("Ether error");
        alert(error);
      }
    };
    template();
  }, []);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const complaints = await state.contract.getAllComplaints();
        setComplaints(complaints);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };
    fetchComplaints();
  }, []);

  // Function to register a complaint
  const registerComplaint = async (name, email, addr, mobile, description) => {
    try {
      if (!state.contract) {
        console.error("Contract instance not found.");
        return;
      }
      const transaction = await state.contract.Register(
        name,
        email,
        addr,
        mobile,
        description
      );
      await transaction.wait();
      // fetchComplaints();
      console.log("Complaint registered successfully.");
    } catch (error) {
      console.error("Error registering complaint:", error);
      alert("Error registering complaint. Please try again later.");
    }
  };
  const fetchComplaints = async () => {
    try {
      // if (!state.contract.getAllComplaints()) {
      const complaints = await state.contract.getAllComplaints();
      setComplaints(complaints);
      console.log(complaints);
    } catch (error) {
      console.error("Error fetching complaints:", error);
      alert("Error fetching complaints. Please try again later.");
    }
  };

  const updateComplaintStatus = async () => {
    try {
      await state.contract.UpdateStatus();
      console.log("Complaint status updated successfully.");
    } catch (error) {
      console.error("Error updating complaint status:", error);
      alert("Error updating complaint status. Please try again later.");
    }
  };


  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/loginH" element={<Hindi />} />
        <Route path="/dashboard_User" element={<DashboardUser />} />
        <Route path="/dashboard_Agency" element={<DashboardAgency />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route
          path="/dashboard_User/history"
          element={<History comp={complaints} />}
        /> */}

<Route
          path="/dashboard_User/history"
          element={<History />}
        />
        <Route
          path="/dashboard_User/myComplaints"
          element={<MyComplaints state={account} />}
        />

        <Route
          path="/dashboard_User/lodge"
          element={<LodgeComplaints register={registerComplaint} />}
        />

        
        <Route path="/dashboard_Agency/stats" element={<Statistics />} />
        <Route
          path="/dashboard_Agency/timeline"
          element={
            <Timeline comp={complaints} update={updateComplaintStatus} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
