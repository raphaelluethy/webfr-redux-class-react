const redux = require('redux');
const Logger = require('redux-logger');
const thunk = require('redux-thunk').default;
const _ = require('lodash');

const logger = Logger.createLogger({
    colors: false
});

const initialState = [
    {
        id: 0,
        text: 'Learn Redux',
        completed: false
    },
    {
        id: 1,
        text: 'Learn React',
        completed: false
    },
    {
        id: 2,
        text: 'Learn React-Redux',
        completed: false
    },
    {
        id: 3,
        text: 'Learn Redux-Thunk',
        completed: false
    },
    {
        id: 4,
        text: 'Learn Redux-Logger',
        completed: false
    },
    {
        id: 5,
        text: 'Learn Redux-DevTools',
        completed: false
    }
];

const TODO_REDUCERS = {
    'todo/completed': (state, action) => {
        const todoIndex = _.findIndex(state, {id: action.id});
        state[todoIndex].completed = !state[todoIndex].completed;
        return [...state];
    },
    'todo/added': (state, action) => {
        const todo = {
            id: state.length,
            text: action.text,
            completed: false
        };
        state.todos.push(todo);
        return [...state];
    },
    'todo/deleted': (state, action) => {
        _.remove(state, {id: action.id});
        return [...state];
    }
};

const todoReducer = (state = initialState, action) => {
    return TODO_REDUCERS[action.type] ? TODO_REDUCERS[action.type](state, action) : state;
};

// const REDUCERS = {
//     'todo/completed': (state, action) => (),
//     'counter/decremented': (state, action) => (state - 1)
// };
// const WAITING_REDUCERS = {
//     'counter/waiting': (state, action) => true,
//     'counter/received': (state, action) => false
// };

// const counterReducer = (state = 0, action) => {
//     return REDUCERS[action.type] ? REDUCERS[action.type](state, action) : state;
// };
// const waitingReducer = (state = false, action) => {
//     return WAITING_REDUCERS[action.type] ? WAITING_REDUCERS[action.type](state, action) : state;
// };

const reducers = redux.combineReducers({
    todos: todoReducer
});
const store = redux.createStore(reducers, redux.applyMiddleware(logger, thunk));
store.subscribe(() => console.log(store.getState()));

module.exports = store;