const BugItem = ({bug, toggle, remove}) => (
    <li>
        <span
            className={'bugname ' + (bug.isClosed ? 'closed' : '')}
            onClick={() => toggle(bug)}
        >
            {bug.name}
        </span>
        <div className="datetime">[{bug.createdAt.toString()}]</div>
        <div>Project : {bug.projectId}</div>
        <input type="button" value="Remove" onClick={() => remove(bug)} />
    </li>
);
export default BugItem;