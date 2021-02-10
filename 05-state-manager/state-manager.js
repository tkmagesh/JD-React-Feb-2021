let StateManager = (function(){
    let _currentState = undefined,
        _callbacks = [],
        _reducer = undefined,
        _init_action = { type : '@@INIT/Action' };

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        if (typeof callback === 'function')
            _callbacks.push(callback);
    }

    //private
    function triggerCallbacks(){
        _callbacks.forEach(callback => callback());
    }

    function dispatch(action){
        let newState = _reducer(_currentState, action);
        if (_currentState === newState) return;
        _currentState = newState;
        triggerCallbacks();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error('Reducer function is mandatory to create the store..!');
        _reducer = reducer;
        _currentState = reducer(undefined, _init_action);
        const store = { getState, subscribe, dispatch };
        return store;
    }

    function bindActionCreators(actionCreators, dispatch){
        return Object.keys(actionCreators)
            .reduce((actionDispatchers, key) => {
                return { ...actionDispatchers, [key] : (...args) => dispatch(actionCreators[key](...args)) }
            }, {});
    }

    return { createStore, bindActionCreators };

})();

