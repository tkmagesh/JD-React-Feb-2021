import { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './index.css';
import BugStats from './components/bugStats';
import BugEdit from './components/bugEdit';
import BugSort from './components/bugSort';
import BugList from './components/bugList';

import * as bugActionCreators from './actions';

const BugTracker = ({bugs, addNew, toggle, remove, removeClosed }) => {
    return(
        <Fragment>
            <h3>Bugs</h3>
            <BugStats bugs={bugs} />
            <BugEdit addNew={addNew} />
            <BugSort/>
            <BugList { ...{bugs, toggle, remove, removeClosed}} />
        </Fragment>
    )
};

function mapStateToProps(storeState){
    const bugs = storeState.bugs;
    return { bugs : bugs };
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker); 


/* 
export default connect(
    ({bugs}) => ({bugs}),
    dispatch => bindActionCreators(bugActionCreators, dispatch)
)(BugTracker); 
*/