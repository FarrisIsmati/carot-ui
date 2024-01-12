import { Margin } from "@/types/Charts";
import { ChartFilterEnum } from "@/types/Charts/Filter";
import * as d3 from "d3";
import { Dispatch, RefObject, SetStateAction } from "react";
import { ChartProps } from "../LineChart";
import createChartAxis from "../utils/createChartAxis";
import createChartLines from "./createChartLines";

interface useSetChartProps {
	ref: RefObject<HTMLDivElement>;
	width: number;
	height: number;
	margin: Margin;
	data: {}[];
	xRange: [number, number];
	yRange: [number, number];
	filter: ChartFilterEnum;
	currencySymbol: string;
	initialLineChartData: {};
	xField: string;
	setChart: Dispatch<SetStateAction<ChartProps | undefined>>;
}

/**
 * Create chart
 */
const createChart = ({
	width,
	height,
	ref,
	margin,
	data,
	xRange,
	yRange,
	filter,
	initialLineChartData,
	currencySymbol,
	xField,
	setChart,
}: useSetChartProps) => {
	const svg = d3
		.select(ref.current)
		.append("div")
		// Container class to make it responsive.
		.classed("svg-container", true)
		.append("svg")
		// Responsive SVG needs these 2 attributes and no width and height attr.
		.attr("preserveAspectRatio", "xMinYMin meet")
		.attr(
			"viewBox",
			`0 0 ${width + margin.left + margin.right} ${
				height + margin.top + margin.bottom
			}`
		)
		// Class to make it responsive.
		.classed("svg-content-responsive", true)
		.append("g")
		.attr("transform", `translate(${margin.left},${margin.top})`);

	// Create chart axis
	const x = d3.scaleTime().range([0, width]);
	const y = d3.scaleLinear().range([height, 0]);

	// Set X & Y time scale and SVG
	setChart({ x, xAxis: null, y, yAxis: null, svg, lines: {} });

	// Create axis
	createChartAxis({
		currencySymbol,
		filter,
		height,
		width,
		svg,
		x,
		y,
		xRange,
		yRange,
		setChart,
	});

	// Create lines
	createChartLines({ x, y, svg, data, initialLineChartData, xField, setChart });
};

export default createChart;
