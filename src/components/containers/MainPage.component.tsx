import { connect, Dispatch } from 'react-redux';
import Main from './../presentationals/Main.component';
import ScenarioData from 'models/ScenarioData';
import StoreState from 'models/StoreState';


const mapStateToProps = (state: StoreState, ownProps: any) => {
	const scenariosChartData = ownProps.scenarios.map((scenario: ScenarioData, index: number) => ({
		name: scenario.name,
		file: scenario.filePath,
		x: `${+(index + 1)}`,
		y: scenario.duration
	}));
	return {
		scenariosChartData
	};
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
});

const MainPage = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainPage;
