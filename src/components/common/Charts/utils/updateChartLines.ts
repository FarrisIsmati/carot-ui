import { getLineColor } from "@/types/Charts/Legend";
import * as d3 from "d3";
import { ChartProps } from "../LineChart";

interface UpdateChartLineProps {
	data: any[];
	chart: ChartProps;
	xField: string;
}

const updateChartLines = ({ data, chart, xField }: UpdateChartLineProps) => {
	const { x, y, lines } = chart;
	// Update line
	const existingLinesKey = Object.keys(lines);

	// Are there any existing lines
	if (existingLinesKey.length > 0) {
		existingLinesKey.forEach((k) => {
			const lineAttr = d3
				.line()
				// @ts-ignore
				.x((d) => x(d[xField]))
				// @ts-ignore

				.y((d) => y(d[k]));

			lines[k]
				.data([data])
				.transition()
				.duration(1000)
				.attr("fill", "none")
				.attr("stroke", getLineColor(k))
				.attr("stroke-width", 1)
				// @ts-ignore
				.attr("d", lineAttr);
		});
	}
};

export default updateChartLines;
