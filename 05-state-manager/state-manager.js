let StateManager = (function(){
    let _currentState = undefined,
        _callbacks = [],
        _reducer = undefined;

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
        _reducer = reducer;
        const store = { getState, subscribe, dispatch };
        return store;
    }

    return { createStore };
})();

