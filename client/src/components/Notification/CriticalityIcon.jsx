import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsExclamationTriangle } from 'react-icons/bs';
import { RxCrossCircled } from 'react-icons/rx';

import { IconContext } from "react-icons";


const CriticalityIcon = ({ criticality, iconSize = "2em" }) => {

	if (criticality === 0) {
		return <IconContext.Provider value={{ color: "blue", size: iconSize }}>
			<div>
				<AiOutlineInfoCircle />
			</div>
		</IconContext.Provider>;




	}

	else if (criticality === 1) {

		return <IconContext.Provider value={{ color: "yellow", size: "2em" }}>
			<div>
				<BsExclamationTriangle />
			</div>
		</IconContext.Provider>;




	}

	return <IconContext.Provider value={{ color: "red", size: "2em" }}>
		<div>
			<RxCrossCircled />
		</div>
	</IconContext.Provider>;


}

export default CriticalityIcon;