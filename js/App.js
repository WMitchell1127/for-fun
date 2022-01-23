
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
        this.changeTheme = this.changeTheme.bind(this)
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
    changeText(font){
        this.setState({
              ...this.state,
            font  
            })
    }
    changeTheme(theme){
        this.setState({
              ...this.state,
            theme  
            })
    }
    render(){
        let allMyTodos = this.state.todos.map(todo => <RenderTodos todo={todo} key={todo.id} getTodos={this.getTodos} theme={this.state.theme}/>)
        return(
            <div className={`${this.state.font} ${this.state.theme} app`}>
                <AddTodo getTodos={this.getTodos} changeText={this.changeText} text={this.state.font} changeTheme={this.changeTheme} theme={this.state.theme}/>
                { this.state.todos.length > 0 ? allMyTodos : <h3>There is nothing left to do!</h3> }
            </div>
        )
    }
}