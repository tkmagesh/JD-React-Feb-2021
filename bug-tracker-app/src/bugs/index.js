import { Fragment } from 'react';

import './index.css';
import BugStats from './components/bugStats';
import BugEdit from './components/bugEdit';
import BugSort from './components/bugSort';
import BugList from './components/bugList';

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
export default BugTracker;