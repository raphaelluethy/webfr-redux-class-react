import {useDispatch, useSelector} from "react-redux";
import TodoItem from "./TodoItem";
import {useEffect, useState} from "react";
import {Table} from "reactstrap";

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const[ text, setText ] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('Todolist mounted', todos);
        return () => console.log('Todolist unmounted');
    }, [todos]);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'todo/added', text });
        setText('');
    };

    return (
        <div>
            <h1>Todolist</h1>
            <h5>(Functional Component with Redux)</h5>
            <p>Current amount of todos: <strong>{todos.length}</strong></p>
            <p>Current amount of completed todos: <strong>{todos.filter(e => e.completed).length}</strong></p>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Enter Todo"
                />
                <button type="submit">Add Todo</button>
            </form>
            <Table
                bordered
                hover
                responsive
                striped>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Text</th>
                    <th>Completed</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {todos.map(({completed, id, text}) => <TodoItem
                    completed={completed}
                    id={id}
                    text={text}/>)}
                </tbody>
            </Table>
        </div>
    );
};

export default TodoList;