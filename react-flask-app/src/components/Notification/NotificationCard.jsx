import CriticalityIcon from "./CriticalityIcon";
//crit is the degree of criticality  on a scale from 0 to 2
const NotificationCard = ({ crit, title, subTitle, description, time }) => {

	return (
		<div class="grid grid-rows-3 grid-flow-col gap-4 p-7 m-4  bg-lightgrey rounded-md ...">
			<div className="col-span-1 row-span-1 ...">
				<CriticalityIcon criticality={crit} /></div>

			<div className="col-span-3 ..."><p className="text-white text-base">{subTitle}</p></div>
			<div className="col-span-3 ..."><p className="text-white text-sm">{description}</p></div>
			<div className="col-span-1 row-span-1 ..."><p className="text-white text-xl">{title}</p> </div>
			<div className="col-span-1 row-span-1 ..."><p className="text-white text-sm">{time}</p></div>
		</div>
	);
}

export default NotificationCard;