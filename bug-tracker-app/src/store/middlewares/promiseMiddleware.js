const promiseMiddleware = store => next => action => {
    if (action instanceof Promise){
        action.then(actionObj => store.dispatch(actionObj));
    } else {
        return next(action);
    }
}
export default promiseMiddleware;