class EditTodo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: '',
            task: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        this.setState({
            ...this.state,
            id: this.props.todo.id,
            task: this.props.todo.task
        })
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
        store.dispatch(updateTodo(this.state))
        this.setState({
            ...this.state,
            task: ''
        })
        this.props.getTodos()
        this.props.showEdit()
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input className="f-input" type="text" name="task" value={this.state.task} onChange={this.handleChange} placeholder={this.state.task} />
                <button className={`btn ${this.props.theme} submit-btn`} type="submit">Change</button>
            </form>
        )
    }
}