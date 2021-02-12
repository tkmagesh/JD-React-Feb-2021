import { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './index.css';
import BugStats from './components/bugStats';
import BugEdit from './components/bugEdit';
import BugSort from './components/bugSort';
import BugList from './components/bugList';

import * as bugActionCreators from './actions';

const BugTracker = ({bugs, addNew, toggle, remove, removeClosed, projects }) => {
    return(
        <Fragment>
            <h3>Bugs</h3>
            <BugStats bugs={bugs} />
            <BugEdit addNew={addNew} projects={projects} />
            <BugSort/>
            <BugList { ...{bugs, toggle, remove, removeClosed}} />
        </Fragment>
    )
};

function mapStateToProps(storeState){
    const bugs = storeState.bugs,
        projects = storeState.projects,
        filterBugs = storeState.filterBugs;
    return { 
        bugs : filterBugs.filterBugs ? bugs.filter(bug => bug.projectId === filterBugs.selectedProject) : bugs, 
        projects : projects
    };
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