import * as React from 'react';
import { Button } from 'reactstrap';

export interface ITabHeaderButtonsProps {
	toggleTab: (tab: string) => void;
	activeTab: string;
}

class TabHeaderButtons extends React.Component<ITabHeaderButtonsProps> {
	constructor(props: ITabHeaderButtonsProps) {
		super(props);
	}

	public render() {
		return (
			<ul className="tabs-buttons-wrapper">
				<li>
					<Button
						color="secondary"
						className={`tabs-buttons ${this.props.activeTab === '1' ? 'tab-button-active' : ''}`}
						onClick={this.props.toggleTab.bind(this, '1')}
					>
						Bar Chart
					</Button>
				</li>
				<li>
					<Button
						color="secondary"
						className={`tabs-buttons ${this.props.activeTab === '2' ? 'tab-button-active' : ''}`}
						onClick={this.props.toggleTab.bind(this, '2')}
					>
						Pie Chart
					</Button>
				</li>
			</ul>
		);
	}
}

export default TabHeaderButtons;
