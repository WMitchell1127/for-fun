class AddTodo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            task: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        let { name, value } = e.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        store.dispatch(addTodo(this.state))
        this.props.getTodos()
        this.setState({
            ...this.state,
            task : ''
        })
    }
    render(){
        return(
            <div>
                <h1>Things to do!</h1>
                <StyleController changeText={this.props.changeText} text={this.props.font} />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="task" value={this.state.task} onChange={this.handleChange} required />
                    <button type="submit">Add Task</button>
                </form>
            </div>
        )
    }
}