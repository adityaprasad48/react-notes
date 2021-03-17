import clsx from "clsx";
import React, { useRef, useState } from "react";

const Circles = ({ circles, direction, showCountActive }) => {
	const [ativeCircle, setActiveCircle] = useState({});
	const count = useRef(0);

	const handleClick = (e, name) => {
		if (ativeCircle[name]) {
			setActiveCircle({ ...ativeCircle, [name]: false });
			count.current = count.current - 1;
		} else {
			setActiveCircle({ ...ativeCircle, [name]: true });
			count.current = count.current + 1;
		}

		showCountActive(count.current);
	};

	let circlElements = [];

	for (let index = 0; index < circles; index++) {
		let key = `name${index}`;
		circlElements.push(
			<div
				key={key}
				onClick={(e) => handleClick(e, key)}
				className={clsx("circle", [ativeCircle[key] && "circle-focus"])}
			></div>
		);
	}
	return <div className="circle-border">{circlElements}</div>;
};

export default Circles;
