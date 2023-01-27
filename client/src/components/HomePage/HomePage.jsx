import React, { useState } from "react";
import NotificationCard from "../Notification/NotificationCard";
import NotificationSide from "../Notification/NotificationSide";
import SemiCircleProgressBar from "react-progressbar-semicircle";

const HomePage = () => {
	const [etat,setEtat] =useState("Good");
	const [lastUpdate,setLastUpdate]=useState("Dec 05 5:35 pm");
	
	
	return (
		<div className="flex p-5  ..." style={{ height: "92vh" }} >
			<div className="flex sm:flex-row w-2/3 p-5 bg-gradient-to-r from-[#0d0b17] to-[#2a1d51] rounded-lg mr-4">
				<div className="w-2/3 h-1/2 m-3">

				</div>
				<div className="flex sm:flex-col justify-center text-center items-center w-2/5 h-1/2 text-white text-10  
								bg-[#190e38] rounded-lg m-3">
					<h1 className="mb-7 mt-1">Pourcentage De Risque</h1>
					<SemiCircleProgressBar showPercentValue percentage={33} background="#292146" stroke="#6f48e2" strokeWidth={20}/>
					<label className="bg-secondary rounded mt-6 p-4 pt-2 pb-2">{etat}</label>
					<label className="text-sm text-textgreylight mt-2">Last update:{lastUpdate}</label>
				</div>
			</div>

			<div className=" w-1/3 p-5 bg-darkgrey rounded-lg ... ">
				<NotificationSide />
			</div>
		</div>);
}

export default HomePage;