import { createGrowthCurve } from "@/components/VisionForm/utils/growthCurve";
import LineChart from "@/components/common/Charts/LineChart";
import { ChartFilterEnum } from "@/types/Charts/Filter";
import { CurveType } from "@/types/VisionForm/locationSection";
import { useMemo } from "react";

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
		<LineChart
			data={curveDataPoints}
			isDataLoaded={curveDataPoints.length > 0}
			initialLineChartData={initialLineChartData}
			xField="date"
			height={320}
			width={400}
			margin={{ top: 10, right: 20, bottom: 20, left: 20 }}
			filter={ChartFilterEnum.Month}
		/>
	);
};

export default GrowthCurveGraph;

// import { Label, Line, LineChart, XAxis, YAxis } from "recharts";

// 		// RECHARTS
// 		<LineChart
// 			width={pxStringToNum(spacer320)}
// 			height={pxStringToNum(spacer320)}
// 			data={curveDataPoints}
// 		>
// 			<Line
// 				type="monotone"
// 				dataKey="uv"
// 				strokeWidth={2}
// 				stroke={getLineColor("uv")}
// 				dot={false}
// 			/>
// 			<XAxis dataKey="name">
// 				<Label
// 					style={{
// 						textAnchor: "middle",
// 						fontSize: "80%",
// 					}}
// 					angle={0}
// 					value={"Time"}
// 				/>
// 			</XAxis>
// 			<YAxis>
// 				<Label
// 					style={{
// 						textAnchor: "middle",
// 						fontSize: "80%",
// 					}}
// 					angle={270}
// 					value={"Growth Percentage"}
// 				/>
// 			</YAxis>
// 		</LineChart>
