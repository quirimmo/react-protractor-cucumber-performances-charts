import * as React from 'react';
import PerformancesResultsReader from './../../models/PerformancesResultsReader';

interface IAppProps extends React.Props<App> {}

class App extends React.Component<IAppProps, {}> {
	constructor(props: IAppProps) {
		super(props);
		const performancesResultsReader = new PerformancesResultsReader();
		performancesResultsReader.read();
	}

	public render() {
		return <h2>Hello World!</h2>;
	}
}

export default App;

// import * as React from 'react';
// import { BrowserRouter } from 'react-router-dom';

// import MainMenu from './main-menu/components/presentationals/MainMenu.component.jsx';
// import MainContent from './main-content/components/presentationals/MainContent.component.jsx';
// import LikesCounterContainer from './likes-counter/components/containers/LikesCounter.container.jsx';
// import Todo from './todo/components/presentationals/Todo.component.jsx';
// import PerformancesBarChartPage from
// './performances-bar-chart/components/presentationals/PerformancesBarChartPage.component.jsx';

// import './../../assets/styles/main.scss';

// class App extends Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		const menuItems = [
// 			{
// 				id: 1,
// 				label: 'Likes Counter',
// 				path: '/likes-counter',
// 				component: LikesCounterContainer
// 			},
// 			{
// 				id: 2,
// 				label: 'Todo',
// 				path: '/todo',
// 				component: Todo
// 			},
// 			{
// 				id: 3,
// 				label: 'Performances Bar Chart',
// 				path: '/performances-bar-chart',
// 				component: PerformancesBarChartPage
// 			}
// 		];

// 		return (
// 			<MuiThemeProvider>
// 				<div>
// 					<DocumentTitle title="React Playground" />
// 					<HashRouter>
// 						<div>
// 							<div>
// 								<MainMenu items={menuItems} />
// 							</div>
// 							<div>
// 								<MainContent items={menuItems} />
// 							</div>
// 						</div>
// 					</HashRouter>
// 				</div>@
// 			</MuiThemeProvider>
// 		);
// 	}
// }

// export default App;

// import greeting from './some_module';
// import './../assets/styles/main.scss';

// console.log(greeting);
