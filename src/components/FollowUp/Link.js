import { useContext, useEffect, useRef, useState } from "react";
import { CoordsContext } from "../../contexts/coordsContext";
import { Anchor } from "./followUpStyles";

const Link = ({ children, href = "/" }) => {
	const linkRef = useRef();
	const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
	const { setCoords } = useContext(CoordsContext);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition({
				x: window.scrollX,
				y: window.scrollY,
			});
		};
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const link = linkRef.current;
		if (!link) return;

		const mouseHandler = () => {
			let rect = linkRef.current.getBoundingClientRect();

			// window object in child component
			let coords = {
				width: rect.width,
				height: rect.height,
				left: rect.left + window.scrollX,
				top: rect.top + window.scrollY,
			};
			console.log(window.scrollX);
			setCoords(coords);
		};

		link.addEventListener("mouseenter", mouseHandler);

		return () => {
			link.removeEventListener("mouseenter", mouseHandler);
		};
	}, [setCoords]);

	return (
		<Anchor ref={linkRef} href={href}>
			{children}
		</Anchor>
	);
};

export default Link;
