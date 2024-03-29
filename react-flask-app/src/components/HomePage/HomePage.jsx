import React, { useState } from "react";
import NotificationCard from "../Notification/NotificationCard";
import NotificationSide from "../Notification/NotificationSide";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import DetailedNotification from "../Notification/DetailedNotification";
import { LogContext } from "../context/context";
import LineChart from "../graphs/LineChart";

const HomePage = () => {
	const [etat, setEtat] = useState("Good");
	const [lastUpdate, setLastUpdate] = useState("Dec 05 5:35 pm");
	const [currentLog, setcurrentLog] = useState("1");
	const value = { currentLog, setcurrentLog };
	const riskArr = ["faible", "moyen", "élevé"];
	const riskColor = ["blue", "yellow", "red"]

	return (
		<LogContext.Provider value={value}>
			{console.log("the fucking current context" + value.currentLog)}
			<div className="flex p-5  ..." style={{ height: "92vh" }} >
				<div className="flex sm:flex-row w-2/3 p-5 pt-60 bg-gradient-to-r from-[#0d0b17] to-[#2a1d51] rounded-lg mr-4">

					<div className="p-4  w-2/3 h-1/2 m-3 bg-[#190e38] rounded-lg">
						<div>
							<DetailedNotification crit={value.currentLog.crit} description={value.currentLog.description} ipdestination={value.currentLog.ip_dest} ipsource={value.currentLog.ip_source} subtitle={value.currentLog.subtitle} time={value.currentLog.time} title={value.currentLog.title} />
						</div>
					</div>

					<div className="flex sm:flex-col justify-center text-center items-center w-2/5 h-1/2 text-white text-10  
								bg-[#190e38] rounded-lg m-3">
						<h1 className="mb-7 mt-1">Pourcentage De Risque</h1>
						<SemiCircleProgressBar showPercentValue percentage={(value.currentLog.crit + 1) * 30} background="#292146" stroke={riskColor[value.currentLog.crit]} strokeWidth={20} />
						<label className="bg-secondary rounded mt-6 p-4 pt-2 pb-2">{riskArr[value.currentLog.crit]}</label>

					</div>

				</div>


				<div className=" w-1/3 p-5 bg-darkgrey rounded-lg ... ">
					<NotificationSide />
				</div>
				{/*<LineChart />*/}
			</div>
		</LogContext.Provider>);
}

export default HomePage;