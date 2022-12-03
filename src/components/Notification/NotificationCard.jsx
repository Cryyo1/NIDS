

const NotificationCard = ({ icon, title, subTitle, description, time }) => {
	return (
		<div class="grid grid-rows-3 grid-flow-col gap-4 p-7 m-4 rounded-md ..." style={{ backgroundColor: "#38363c" }}>
			<div className="col-span-1 row-span-1 ..."><p className="text-white text-lg">{icon}</p></div>
			<div className="col-span-3 ..."><p className="text-white text-base">{subTitle}</p></div>
			<div className="col-span-3 ..."><p className="text-white text-sm">{description}</p></div>
			<div className="col-span-1 row-span-1 ..."><p className="text-white text-xl">{title}</p> </div>
			<div className="col-span-1 row-span-1 ..."><p className="text-white text-sm">{time}</p></div>
		</div>
	);
}

export default NotificationCard;