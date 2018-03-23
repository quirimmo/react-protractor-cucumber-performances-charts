import * as React from 'react';

interface IPerformancesBarChartTooltipProps {
	title: string;
	subTitle: string;
	y: number;
}

class PerformancesBarChartTooltip extends React.Component<IPerformancesBarChartTooltipProps> {
	constructor(props: IPerformancesBarChartTooltipProps) {
		super(props);
	}

	public render() {
		return (
			<div className="wrapper-scenario-chart-tooltip">
				<h3>{this.props.title}</h3>
				{getSubTitle.call(this)}
				<h5 className="single-scenario-duration">{this.props.y.toString()} seconds</h5>
			</div>
		);

		function getSubTitle(this: PerformancesBarChartTooltip): React.ReactElement<HTMLElement> | void {
			if (this.props.subTitle) {
				return <h4 className="single-scenario-file">{this.props.subTitle}</h4>;
			} else {
				return;
			}
		}
	}
}

export default PerformancesBarChartTooltip;
