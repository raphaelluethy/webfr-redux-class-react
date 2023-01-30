import {Jumbotron} from "reactstrap";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";

function App() {
    return (
        <div>
            <Jumbotron>
                <h1>Hello World, yes its again the Todolist 🤡</h1>
            </Jumbotron>
            <div className="ml-2">
                <TodoList/>
            </div>
            <Counter/>
        </div>
    )
        ;
}

export default App;
