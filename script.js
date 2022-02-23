function Todo(props) {
    return (
        <li>
            <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle}/>
            <button onClick={props.onDelete}>Delete</button>
            <span>{props.todo.text}</span>
        </li>
    )
}

let id = 0;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                { id: 997, text: 'task one', checked: true },
                { id: 998, text: 'task two', checked: false },
                { id: 999, text: 'task three', checked: true },
                //{ id: 1000, text: 'task four', checked: false },
            ]
        }
    }

    addTodo(){
        const text = prompt('addTodo');
        this.setState({todos: [...this.state.todos, {id: id++, text: text, checked: false }] })
    }

    deleteTodo(id) {
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
    }

    toggleTodo(id) {
        this.setState({todos: this.state.todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo) })
    }

    render() {
        return (
            <div>
                <h2>My ToDo App</h2>
                <p>Item count: {this.state.todos.length}</p>
                <p>Unchecked count: {this.state.todos.filter(todo => !todo.checked).length}</p>

                <button onClick={() => this.addTodo()}>New TODO</button>
                <ul>{
                    this.state.todos.map(todo => <Todo 
                        todo={todo} key={todo.id} 
                        onDelete={() => this.deleteTodo(todo.id)}
                        onToggle={() => this.toggleTodo(todo.id)}
                        />)
                    }</ul>
            </div>
        );
    }   
}
  
ReactDOM.render(<App />, document.getElementById('mydiv'))