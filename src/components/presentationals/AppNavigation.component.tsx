import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { Container, Row, Col, Badge } from 'reactstrap';

class AppNavigation extends React.Component<object> {
	constructor(props: object) {
		super(props);
	}

	public render() {
		return (
			<Row>
				<Col sm="2">
					<NavLink to="/main">Scenarios Page</NavLink>
				</Col>
				<Col sm="2">
					<NavLink to="/steps">Steps Page</NavLink>
				</Col>
			</Row>
		);
	}
}

export default AppNavigation;
