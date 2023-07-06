import ChartBar from "./ChartBar";
import "./Chart.css"

const Chart = (props) => {
	let dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
	let maximum = Math.max(...dataPointsValues)


	return (
		<div className="chart">
			{props.dataPoints.map((datapoint) => (
				<ChartBar
					key={datapoint.label}
					value={datapoint.value}
					maxValue={maximum}
					label={datapoint.label}
				></ChartBar>
			))}
		</div>
	);
};

export default Chart;
