import { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as projectActionCreators from './actions';

const Projects = ({projects, load}) => {
    console.log(projects);
    const projectItems = projects.map(project => (<li key={project.id}>{project.name}</li>))

    return(
        <Fragment>
            <h3>Projects</h3>
            <hr/>
            <input type="button" value="Load" onClick={load} />
            <ol>
                {projectItems}
            </ol>
        </Fragment>
    )
}

function mapStateToProps(storeState){
    const { projects } = storeState;
    return { projects : projects };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(projectActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);