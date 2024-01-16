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
	startDate: Date;
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
			yRangeOverride={[0, 100]}
			xField="date"
			height={320}
			width={750}
			margin={{ top: 10, right: 20, bottom: 20, left: 20 }}
			filter={ChartFilterEnum.Year}
			suffix="%"
		/>
	);
};

export default GrowthCurveGraph;
