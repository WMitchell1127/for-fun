
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todos : [],
            font : 'default-txt',
            theme : 'default-theme'
        }
        this.getTodos = this.getTodos.bind(this)
        this.changeText = this.changeText.bind(this)
    }
    componentDidMount(){
        this.getTodos()
        document.body.classList = `${this.state.theme} body`
    }
    getTodos(){
        this.setState({
            ...this.state,
            todos : store.getState().todos
        })
    }
    changeText(){
        this.setState({
              ...this.state,
            font : store.getState().font
            })
    }
    render(){
        let allMyTodos = this.state.todos.map(todo => <RenderTodos todo={todo} key={todo.id} getTodos={this.getTodos} theme={this.state.theme}/>)
        
        return(
            <div className={`${store.getState().font} ${store.getState().theme} app`}>
                <AddTodo getTodos={this.getTodos} changeText={this.changeText} text={this.state.font}/>
                { this.state.todos.length > 0 ? allMyTodos : <h3>There is nothing left to do!</h3> }
            </div>
        )
    }
}