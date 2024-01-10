import { useEffect, useState } from "react";

const useResultsWidth = () => {
	const [refWidth, setRefWidth] = useState(0);

	// TODO: make all dynamic
	// Padding from both sides of the window (change if updating)
	const sidePadding = 172;
	const maxFormWidth = 486;

	const calcWidth = (ww: number | undefined) => {
		const width = (ww ?? 0) - sidePadding - maxFormWidth;
		if (width > 1200) {
			return 1200;
		}

		if (width < 950) {
			return 950;
		}

		return width;
	};

	useEffect(() => {
		setRefWidth(calcWidth(window.innerWidth));
		// to handle page resize
		const getWidth = () => {
			setRefWidth(calcWidth(window.innerWidth));
		};
		window.addEventListener("resize", getWidth);

		// remove the event listener before the component gets unmounted
		return () => window.removeEventListener("resize", getWidth);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return refWidth;
};

export default useResultsWidth;
