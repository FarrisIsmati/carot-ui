import { useEffect, useState } from "react";

/**
 * Updates sizing of overview headers so each section can have a fixed width in px
 * @param divisons
 * @param parentRef
 * @returns
 */
const useUpdateOverviewHeaderSizing = (
	divisons: number,
	parentRef: React.RefObject<HTMLDivElement>
): number => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const resizeHandler = () => {
			if (parentRef.current) {
				const parentWidth = parentRef.current.offsetWidth;
				setWidth(parentWidth / divisons);
			}
		};

		window.addEventListener("resize", resizeHandler);
		resizeHandler(); // Initial check

		return () => {
			window.removeEventListener("resize", resizeHandler);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [parentRef.current]);

	return width;
};

export default useUpdateOverviewHeaderSizing;
