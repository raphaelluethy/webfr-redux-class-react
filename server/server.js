const redux = require('redux');
const Logger = require('redux-logger');
const thunk = require('redux-thunk').default;

const logger = Logger.createLogger({
    colors: false
});

const REDUCERS = {
    'counter/incremented': (state, action) => ({counter: state.counter + 1}),
    'counter/decremented': (state, action) => ({counter: state.counter - 1})
};
const WAITING_REDUCERS = {
    'counter/waiting': (state, action) => true,
    'counter/received': (state, action) => false
};

const counterReducer = (state = {counter: 0}, action) => {
    return REDUCERS[action.type] ? REDUCERS[action.type](state, action) : state;
};
const waitingReducer = (state = false, action) => {
    return WAITING_REDUCERS[action.type] ? WAITING_REDUCERS[action.type](state, action) : state;
};

const reducers = redux.combineReducers({
    counter: counterReducer, waiting: waitingReducer
});
const store = redux.createStore(reducers, redux.applyMiddleware(logger, thunk));
store.subscribe(() => console.log(store.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({type: 'counter/incremented'});
// {value: 1}
store.dispatch({type: 'counter/incremented'});
// {value: 2}
store.dispatch({type: 'counter/decremented'});
// {value: 1}

store.dispatch(dispatch => {
    dispatch({type: 'counter/waiting'});
    setTimeout(() => {
        dispatch({type: 'counter/decremented'});
        dispatch({type: 'counter/received'});
    }, 2000);
});
