
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todos : [],
            font : 'default-txt'
        }
        this.getTodos = this.getTodos.bind(this)
        this.changeText = this.changeText.bind(this)
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
    changeText(font){
        this.setState({
              ...this.state,
            font  
            })
    }
    render(){
        let allMyTodos = this.state.todos.map(todo => <RenderTodos todo={todo} key={todo.id} getTodos={this.getTodos}/>)
        return(
            <div className={this.state.font}>
                <AddTodo getTodos={this.getTodos} changeText={this.changeText} text={this.state.font}/>
                { this.state.todos.length > 0 ? allMyTodos : <h3>There is nothing left to do!</h3> }
            </div>
        )
    }
}