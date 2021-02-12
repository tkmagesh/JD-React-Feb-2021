import { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './index.css';
import { useEffect } from 'react';

import BugStats from './components/bugStats';
import BugEdit from './components/bugEdit';
import BugSort from './components/bugSort';
import BugList from './components/bugList';

import * as bugActionCreators from './actions';

//Container / Smart component
const BugTracker = ({bugs, addNew, toggle, remove, removeClosed, projects, load }) => {
    useEffect(() => {
        load();
    }, [load]);
    return(
        <Fragment>
            <h3>Bugs</h3>
            {/* <input type="button" value="Load Bugs" onClick={load} /> */}
            {/* Presentation / Dumb components */}
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