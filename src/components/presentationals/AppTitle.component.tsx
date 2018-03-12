import * as React from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';

class AppTitle extends React.Component<object> {
	constructor(props: object) {
		super(props);
	}

	public render() {
		return (
			<Row>
				<Col>
					<h2 className="main-app-title">
						<Badge color="secondary">Protractor Cucumber Performances Charts</Badge>
					</h2>
				</Col>
			</Row>
		);
	}
}

export default AppTitle;
