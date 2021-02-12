import { useState } from 'react';

const BugEdit = ({addNew, projects}) => {
    const [newBugName, setNewBugName] = useState('');
    const [selectedProject, setSelectedProject] = useState(0);
    return (
        <section className="edit">
            <label htmlFor="">Bug Name : </label>
            <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
            <label>Project :</label>
            <select onChange={evt => setSelectedProject(evt.target.value)}>
                <option value=''>---Select---</option>
                {projects.map((project) => <option key={project.id} value={project.id}>{project.name}</option>)}
            </select>
            <input type="button" value="Add New" onClick={() => addNew(newBugName, parseInt(selectedProject))} />
        </section>
    )
};
export default BugEdit;