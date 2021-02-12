import { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import './index.css';
import * as projectActionCreators from './actions';
import * as sharedActionCreators from '../shared/actions';

const Projects = ({projects, load, setSelectedProject, setFilterBugs, selectedProject }) => {
    
    useEffect(() => {
        load();
    }, [load]);

    const projectItems = projects.map(project => 
        (<li 
            key={project.id} 
            className={ project.id === selectedProject ? 'selected' : '' }
            onClick={() => setSelectedProject(project.id)}>{project.name}</li>))

    return(
        <Fragment>
            <h3>Projects</h3>
            <hr/>
             <div>
                <label>Filter Bugs :</label>
                <input type="checkbox" onChange={ evt => setFilterBugs(evt.target.checked) }/>
            </div>
            {/* <input type="button" value="Load" onClick={load} /> */}
            <ol>
                {projectItems}
            </ol>
        </Fragment>
    )
}

function mapStateToProps(storeState){
    const { projects, filterBugs } = storeState;
    return { projects : projects, selectedProject : filterBugs.selectedProject };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ ...projectActionCreators, ...sharedActionCreators}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);