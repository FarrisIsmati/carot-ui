import { getLineColor } from "@/types/Charts/Legend";
import * as d3 from "d3";
import { Dispatch, SetStateAction } from "react";
import { ChartProps } from "../LineChart";

interface CreateLineProps {
	svg: d3.Selection<SVGGElement, unknown, any, undefined>;
	key: string;
	x: d3.ScaleTime<number, number, never>;
	y: d3.ScaleLinear<number, number, never>;
	initialLineChartData: {};
	xField: string;
}

// Create a blank line (for initializing chart)
export const createChartLine = ({
	svg,
	initialLineChartData,
	xField,
	key,
	x,
	y,
}: CreateLineProps) => {
	const lineAttr = d3
		.line()
		.x((d) => {
			console.log("LE D", d);
			// @ts-ignore
			if (!d.date) {
				throw new Error(`Line chart data must include a ${xField} field`);
			}
			// @ts-ignore
			return x(d[xField]);
		})
		// @ts-ignore
		.y((d) => y(d[key]));

	const res = svg
		.append("path")
		.data([[initialLineChartData]])
		.attr("fill", "none")
		.attr("stroke", getLineColor(key))
		.attr("stroke-width", 0)
		.attr("d", lineAttr as unknown as readonly (string | number)[]);

	return res;
};

interface CreateChartLinesProps {
	data: any[];
	x: d3.ScaleTime<number, number, never>;
	y: d3.ScaleLinear<number, number, never>;
	svg: d3.Selection<SVGGElement, unknown, any, undefined>;
	initialLineChartData: {};
	xField: string;
	setChart: Dispatch<SetStateAction<ChartProps | undefined>>;
}

const createChartLines = ({
	x,
	y,
	svg,
	data,
	initialLineChartData,
	xField,
	setChart,
}: CreateChartLinesProps) => {
	// Create init lines (will have no data)
	const fields = Object.keys(data[0]) as Array<keyof (typeof data)[0]>;

	fields.forEach((k) => {
		const key = k as string;

		if (key === xField) {
			return;
		}

		// Create initial blank lines (so update lines has reference to lines)
		const line = createChartLine({
			initialLineChartData,
			x,
			y,
			svg,
			key,
			xField,
		});

		setChart((prev) => {
			if (prev && prev.lines) {
				prev.lines[key] = line;
			}
			return prev;
		});
	});
};

export default createChartLines;
