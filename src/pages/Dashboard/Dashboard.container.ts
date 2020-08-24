import { AppState } from '@store';
import { connect } from 'react-redux';
import { StateProps } from './types';
import { Dashboard } from './Dashboard';

const mapStateToProps = ({ loading }: AppState): StateProps => ({
    isLoading: loading.dashboard.isLoading
});

export default connect<StateProps, {}>(mapStateToProps, {})(Dashboard);
