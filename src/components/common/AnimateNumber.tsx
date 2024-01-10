import { useRef } from "react";
import CountUp from "react-countup";

interface AnimateNumberProps {
	value: number;
	decimals?: number;
	duration?: number;
	preText?: string;
	postText?: string;
	onEnd?: () => void;
}

const AnimateNumber = ({
	value,
	decimals = 0,
	duration = 1,
	preText,
	postText,
	onEnd,
}: AnimateNumberProps) => {
	// Revenue
	const valueRef = useRef(value ?? 0);
	const curVal = value ?? 0;
	const prevVal = valueRef.current === undefined ? 0 : valueRef.current;
	if (valueRef.current !== undefined) {
		valueRef.current = curVal;
	}

	return (
		<CountUp
			start={prevVal}
			end={curVal}
			onEnd={onEnd}
			delay={0}
			decimals={decimals}
			duration={duration}
		>
			{({ countUpRef }) => (
				<div>
					{preText}
					<span ref={countUpRef} />
					{postText}
				</div>
			)}
		</CountUp>
	);
};

export default AnimateNumber;
