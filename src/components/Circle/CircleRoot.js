import React, { useState } from "react";
import Circles from "./Circles";

const CircleRoot = () => {
	const [count, set] = useState(0);
	const showCountActive = (val) => {
		set(val);
	};

	return (
		<div className="circle-root">
			<Circles circles={40}  showCountActive={showCountActive} />
			<h1>Active Circle {count}</h1>
		</div>
	);
};

export default CircleRoot;
