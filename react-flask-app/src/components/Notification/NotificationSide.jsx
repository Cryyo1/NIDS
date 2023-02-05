import { React, useContext, useEffect, useState } from "react";
import NotificationCard from "../Notification/NotificationCard";
import axios from "axios";
import { LogContext } from "../context/context";

const NotificationSide = () => {

	var [logs, setLogs] = useState([]);
	const { currentLog, setcurrentLog } = useContext(LogContext);

	const updateLogs = () => {
		const intervall = setInterval(() => {
			axios.get("/data")
				.then((res) => {
					setLogs([...res.data])
						.catch((e) => console.error(e))

				})
		}, 10000);
		return () => clearInterval(intervall);
	}

	useEffect(() => {
		updateLogs();
	}, []);



	const Logs = () => {
		const listOfLogs = logs.map((log) => {
			return <div onClick={() => { setcurrentLog(log); console.log(currentLog) }}>
				<NotificationCard
					crit={log.crit}
					title={log.title}
					subtitle={log.subtitle}
					time={log.time}
					description={log.description}
				/>
			</div>
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