import { spacer8 } from "@/styles/sizes";
import { Margin } from "@/types/Charts";
import { ChartFilterEnum } from "@/types/Charts/Filter";
import * as d3 from "d3";
import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import createChart from "./utils/createChart";
import getDimensions from "./utils/getDimensions";
import { getXRange, getYRange } from "./utils/helpers";
import updateChart from "./utils/updateChart";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer8};

	.svg-container {
		display: inline-block;
		position: relative;
		width: 100%;
		padding-bottom: 47%; /* aspect ratio */
		vertical-align: top;
		overflow: hidden;
	}
	.svg-content-responsive {
		display: inline-block;
		position: absolute;
		top: 10px;
		left: 0;
	}
`;

export interface ChartProps {
	x: d3.ScaleTime<number, number, never>;
	xAxis:
		| (d3.Axis<Date | d3.NumberValue> &
				((domainValue: Date | d3.NumberValue, index: number) => string))
		| null;
	y: d3.ScaleLinear<number, number, never>;
	yAxis: d3.Axis<d3.AxisDomain> | null;
	svg: d3.Selection<SVGGElement, unknown, any, undefined>;
	lines: {
		[key: string]: d3.Selection<SVGPathElement, any, any, undefined>;
	};
}

export interface LineChartProps {
	data: any[]; // Data values represented
	isDataLoaded: boolean; // Whether or not to render blank chart before data is set
	xField: string; // X field to represent on data
	yField?: string; // Y field to represent on data
	yRangeOverride?: [number, number]; // Overrides what the maximum range can B
	width: number; // Sizing
	height: number; // Sizing
	margin: Margin;
	initialLineChartData: {};
	filter: ChartFilterEnum; // Defines what timescale is selected
	prefix?: string;
	suffix?: string;
}

const LineChart = ({
	data,
	isDataLoaded,
	xField,
	yField,
	yRangeOverride,
	width: w,
	height: h,
	margin: m,
	filter,
	initialLineChartData,
	prefix = "",
	suffix = "",
}: LineChartProps) => {
	// Ref
	const ref = useRef<HTMLDivElement>(null);

	// Chart elements
	const [chart, setChart] = useState<ChartProps>();

	// Get greatest extent of X Field
	const xRange = getXRange({ data, xField });
	// Get greatest extent of Y Fields
	const yRange = yRangeOverride ?? getYRange({ data, yField, xField });

	// Get width height + margins
	const { width, height, margin } = useMemo(
		() =>
			getDimensions({
				width: w,
				height: h,
				margin: m,
			}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[w, h, m.top, m.bottom, m.left, m.right]
	);

	// Create initial chart
	useEffect(() => {
		createChart({
			prefix,
			suffix,
			initialLineChartData,
			filter,
			xRange,
			yRange,
			width,
			height,
			data,
			ref,
			xField,
			margin,
			setChart,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Only should run on updates to data after component mounts
	if (isDataLoaded && chart) {
		updateChart({
			prefix,
			suffix,
			chart,
			filter,
			xRange,
			yRange,
			data,
			width,
			xField,
		});
	}

	return (
		<Container>
			<div ref={ref}></div>
		</Container>
	);
};

export default LineChart;
