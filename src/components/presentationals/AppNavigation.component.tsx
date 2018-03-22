import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

class AppNavigation extends React.Component<object> {
	constructor(props: object) {
		super(props);
	}

	public render() {
		return (
			<nav>
				<Row>
					<Col sm="2">
						<NavLink to="/main">Scenarios Page</NavLink>
					</Col>
					<Col sm="2">
						<NavLink to="/steps">Steps Page</NavLink>
					</Col>
				</Row>
			</nav>
		);
	}
}

export default AppNavigation;
