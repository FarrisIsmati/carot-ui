import { useEffect, useState } from "react";

const useProjectedWidth = (
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

export default useProjectedWidth;
