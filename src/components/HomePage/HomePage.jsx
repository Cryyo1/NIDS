import React, { useState } from "react";
import NotificationCard from "../Notification/NotificationCard";
import NotificationSide from "../Notification/NotificationSide";

const HomePage = () => {
	return (
		<div className="flex p-7   ..." style={{ height: "92vh" }} >
			<div className="w-2/3"></div>
			<div className=" w-1/3 p-5  rounded-lg ... " style={{ backgroundColor: "#2e2d33" }}>
				<NotificationSide />
			</div>
		</div>);
}

export default HomePage;