import { createContext, useState } from "react";

// Can Have Initial value in Coords
export const CoordsContext = createContext();

// Provider

const CoordsProvider = ({ children }) => {
	// you may be memorize the value
	// useState or useReducer
	const [coords, setCoords] = useState({
		x: 0,
		y: 0,
	});

	return (
		<CoordsContext.Provider value={{ coords, setCoords }}>
			{children}
		</CoordsContext.Provider>
	);
};

export default CoordsProvider;
