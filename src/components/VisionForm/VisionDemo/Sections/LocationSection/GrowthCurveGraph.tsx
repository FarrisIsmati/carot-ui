import { createGrowthCurve } from "@/components/VisionForm/utils/growthCurve";
import { pxStringToNum, spacer320 } from "@/styles/sizes";
import { getLineColor } from "@/types/Charts/Legend";
import { CurveType } from "@/types/VisionForm/locationSection";
import { useMemo } from "react";
import { Label, Line, LineChart, XAxis, YAxis } from "recharts";

export interface GrowthCurveGraphProps {
	/**
	 * Type of curve
	 */
	curveType: CurveType;
	/**
	 * Length in days
	 */
	length: number;
	/**
	 * Start date
	 */
	startDate: string;
}

const GrowthCurveGraph = ({
	curveType,
	length,
	startDate,
}: GrowthCurveGraphProps) => {
	const curveDataPoints = useMemo(
		() => createGrowthCurve({ curveType, length, startDate }),
		[curveType, length, startDate]
	);

	// Initial Line Chart Data
	const initialLineChartData = {
		date: startDate,
		uv: 0,
	};

	return (
		// RECHARTS
		<LineChart
			width={pxStringToNum(spacer320)}
			height={pxStringToNum(spacer320)}
			data={curveDataPoints}
		>
			<Line
				type="monotone"
				dataKey="uv"
				strokeWidth={2}
				stroke={getLineColor("uv")}
				dot={false}
			/>
			<XAxis dataKey="name">
				<Label
					style={{
						textAnchor: "middle",
						fontSize: "80%",
					}}
					angle={0}
					value={"Time"}
				/>
			</XAxis>
			<YAxis>
				<Label
					style={{
						textAnchor: "middle",
						fontSize: "80%",
					}}
					angle={270}
					value={"Growth Percentage"}
				/>
			</YAxis>
		</LineChart>
	);
};

export default GrowthCurveGraph;
