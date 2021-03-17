import React, { useContext } from "react";
import { CoordsContext } from "../../contexts/coordsContext";

const Highlight = () => {
	const { coords } = useContext(CoordsContext);
	return (
		<span
			className="highlight"
			style={{
				width: `${coords.width}px`,
				height: `${coords.height}px`,
				transform: `translate(${coords.left}px, ${coords.top}px)`,
				backgroundColor: "orange",
			}}
		></span>
	);
};

export default Highlight;
