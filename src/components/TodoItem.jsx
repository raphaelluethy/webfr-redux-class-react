import {useDispatch} from "react-redux";
import {Button} from "reactstrap";

const TodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch();
    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{text}</td>
            <td><input type="checkbox" checked={completed} onInput={() => dispatch({type: 'todo/completed', id})}/></td>
            <td><Button color="danger" onClick={() => dispatch({type: 'todo/deleted', id})}>Delete</Button></td>
        </tr>
    );
};

export default TodoItem;