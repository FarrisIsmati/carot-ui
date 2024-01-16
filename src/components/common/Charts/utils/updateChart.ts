import { ChartFilterEnum } from "@/types/Charts/Filter";
import { ChartProps } from "../LineChart";
import updateChartAxis from "./updateChartAxis";
import updateChartLines from "./updateChartLines";

interface UpdateCreateChartProps {
	prefix: string;
	suffix: string;
	chart: ChartProps;
	filter: ChartFilterEnum;
	xRange: [number, number];
	yRange: [number, number];
	data: any[];
	width: number;
	xField: string;
}

const updateChart = ({
	suffix,
	prefix,
	chart,
	filter,
	xRange,
	yRange,
	data,
	width,
	xField,
}: UpdateCreateChartProps) => {
	// Update axis
	updateChartAxis({
		prefix,
		suffix,
		data,
		chart,
		filter,
		xRange,
		yRange,
		width,
	});

	// Update lines
	updateChartLines({ data, chart, xField });
};

export default updateChart;
