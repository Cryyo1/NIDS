import React, { useState } from "react";
import NotificationCard from "../Notification/NotificationCard";

const NotificationSide = () => {

	return (

		<div className=" rounded-md  overflow-y-scroll  h-full max-h-screen scrollbar  scrollbar-track-gray-100 ...">
			<NotificationCard crit={0} title="Intrusion" subTitle="une menace a ete detectée" description=" un menace qui ete detectee" time="18:30" />
			<NotificationCard crit={1} title="Intrusion" subTitle="une menace a ete detectée" description=" un menace qui ete detectee" time="18:30" />
			<NotificationCard crit={1} title="Intrusion" subTitle="une menace a ete detectée" description=" un menace qui ete detectee" time="18:30" />
			<NotificationCard crit={1} title="Intrusion" subTitle="une menace a ete detectée" description=" un menace qui ete detectee" time="18:30" />
			<NotificationCard crit={2} title="Intrusion" subTitle="une menace a ete detectée" description=" un menace qui ete detectee" time="18:30" />
			<NotificationCard crit={1} title="Intrusion" subTitle="une menace a ete detectée" description=" un menace qui ete detectee" time="18:30" />
			<NotificationCard crit={0} title="Intrusion" subTitle="une menace a ete detectée" description=" un menace qui ete detectee" time="18:30" />
			<NotificationCard crit={2} title="Intrusion" subTitle="une menace a ete detectée" description=" un menace qui ete detectee" time="18:30" />
			<NotificationCard crit={69} title="Intrusion" subTitle="une menace a ete detectée" description=" un menace qui ete detectee" time="18:30" />
		</div>);
}

export default NotificationSide;