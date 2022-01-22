
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todos : []
        }
        this.getTodos = this.getTodos.bind(this)
    }
    componentDidMount(){
        this.getTodos()
    }
    getTodos(){
        this.setState({
            ...this.state,
            todos : store.getState().todos
        })
    }
    render(){
        let allMyTodos = this.state.todos.map(todo => <RenderTodos todo={todo} key={todo.id} getTodos={this.getTodos}/>)
        return(
            <div>
                <AddTodo getTodos={this.getTodos}/>
                { this.state.todos.length > 0 ? allMyTodos : <h3>There is nothing left to do!</h3> }
            </div>
        )
    }
}