import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from "axios";


const LineChart = () => {

	const [logs, setLogs] = useState([]);
	const [dataChart, setDataChart] = useState({});
	//const [logArr, setLogArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

	const incrementHour = (index, arr) => {
		let dataset = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		arr.forEach(log => {
			dataset[parseInt(log.time.split(':'))] = dataset[parseInt(log.time.split(':'))] + 1;
		})
		return dataset;
	}

	const updateLogs = () => {
		axios.get("/data")
			.then((res) => {
				console.log([...res.data]);
				setLogs([...res.data]);
				console.log([logs])
			});
	}
	useEffect(() => {

		updateLogs();
		let arr = [...logs]
		setDataChart({
			labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
			datasets: [{
				label: 'Attack per hour',
				data: incrementHour(arr)
			}]
		})

			;


	}, []);

	return (
		<div>
			{console.log('thats sshitty')}
			{/*<Line data={dataChart} />*/}
		</div>
	)
}
export default LineChart;