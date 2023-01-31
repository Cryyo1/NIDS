import {React,useEffect,useState} from "react";
import NotificationCard from "../Notification/NotificationCard";
import axios from "axios";

const NotificationSide = () => {

	var [logs,setLogs]=useState([]);

	useEffect(() => {
		axios.get("/data").then((res) => {
			setLogs([...res.data])
		});
	}, []);
	const Logs = () => {
		const listOfLogs = logs.map((log) => {
			return <NotificationCard
				crit={log.crit}
				title={log.title}
				subtitle={log.subtitle}
				time={log.time}
				description={log.description}
			/>
		});
		return [listOfLogs];
	}

	return (

		<div className=" rounded-md  overflow-y-scroll  h-full max-h-screen scrollbar  scrollbar-track-gray-100 ...">
			<Logs />
		</div>
		
	);
}

export default NotificationSide;