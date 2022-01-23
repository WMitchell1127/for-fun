class AddTodo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            task: '',
            showStyleController: false,
            theme: this.props.theme
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleStyle = this.toggleStyle.bind(this)
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
    toggleStyle(){
        this.setState(prevState => {
            return{
                ...this.state,
                showStyleController : !prevState.showStyleController
            }
        })
    }
    render(){
        return(
            <div className={`${this.props.theme} add-todo-main-div`}>
                <h1 className={`${this.props.theme} title`}>Things to do!</h1>
                <div className={`${this.props.theme} style-control-wrapper`}>
                   { this.state.showStyleController ? <StyleController changeText={this.props.changeText} text={this.props.font} toggleStyle={this.toggleStyle} changeTheme={this.props.changeTheme} theme={this.props.theme}/> : <button className={`btn ${this.state.theme} change-style-btn`}onClick={this.toggleStyle}>Change Style</button>} 
                </div>
                
                <form className="add-task-form" onSubmit={this.handleSubmit}>
                    <input className="f-input" type="text" name="task" value={this.state.task} onChange={this.handleChange} required />
                    <button className={`btn ${this.state.theme} submit-btn submit-task-btn`} type="submit">Add Task</button>
                </form>
            </div>
        )
    }
}