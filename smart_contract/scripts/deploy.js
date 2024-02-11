
const hre = require("hardhat");

const main =  async ()=> {
  const Complaint= await hre.ethers.getContractFactory("Complaint");
  const complaint=await Complaint.deploy();//Creating instance of our smart contract
  
  await complaint.deployed();
  console.log("Complaints deployed to: ",complaint.address);
}
const runMain = async()=>{
  try{
    await main();
    process.exit(0);
  }
  catch(error){
    console.log(error);
    process.exit(1);
  }
}
runMain();


//0x9158544C4d160778aa8AB003F6421365da6e64D1