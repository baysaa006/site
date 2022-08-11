import React from "react";
import "./experience.css";

const experience = () => {
  // const  list=[
  //   'coke',
  //   'pepsi',
  //   'dev',
  //   'seven',
  //   'Drpepper'
  // ];
  // const [filterlist,setfilterList]= useState(list);

  // const handleSearch=(event)=>{
  //   if(event.target.value===''){
  //     setfilterList(list);
  //     return;
  //   }
  //   const filterListvalues=list.filter(
  //   (item)=>
  //     item.toUpperCase().indexOf(event.target.value)
  //   )
  //   }
  // }

  return (
    <section id="experience" className="flex flex-col items-center ">
      <h5>My</h5>
      <h1>Skills</h1>
      <div className="my flex justify-between w-full">
        <div className=" ani rounded-xl ">
          <h1 className="gg">Front end development</h1>
          <p className="text-sm ">Improving skills</p>
          <div className="  flex flex-col gap-2">
            <h2 className="text-xl">Skills</h2>
            <p className="jj">
              HTML5, CSS3, REACT(JAVASCRIPT), TAILWIND, FLUTTER(DART),{" "}
            </p>
            <h2 className="text-xl">Tools</h2>
            <p className="jj"> VSEDITOR, GIT, MATERIAL UI, AWS AMPLIFY UI </p>
          </div>
        </div>
        <div className=" ani rounded-xl">
          <h1 className="gg  ">Dapp development </h1>
          <p className="text-sm">Learning new skills</p>
          <div className="  flex flex-col gap-1 ">
            <h2 className="text-xl">Skills</h2>
            <p className="jj"> SOLIDITY, HARDHAT, IPFS</p>
            <h2 className="text-xl">Tools</h2>
            <p className="jj">
              {" "}
              MORALIS, REMIX, OPENZEPPLIN, CODESANDBOX, SCAFFOLD ETH
            </p>
          </div>
        </div>
      </div>
      <div className="w-4/6 h-2 bg-white  mb-8 rounded-lg "></div>
    </section>
  );
};

export default experience;
