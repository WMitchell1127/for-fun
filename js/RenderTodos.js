
class RenderTodos extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showInput : false
        }
        this.showEdit = this.showEdit.bind(this)
        this.deleteOneTodo = this.deleteOneTodo.bind(this)
    }
    showEdit(){
        this.setState(prevState=>{
            return {
                ...this.state,
                showInput : !prevState.showInput
            }
        })
    }
    deleteOneTodo(id){
        store.dispatch(deleteTodo(id))
        this.props.getTodos()
    }
    render(){
        return(
            <div>
                <h3>{ this.props.todo.task }</h3><button onClick={this.showEdit}>Edit</button>
                <button onClick={()=>this.deleteOneTodo(this.props.todo.id)}>Delete</button>
                <div>
                    { this.state.showInput ? <EditTodo todo={this.props.todo} showEdit={this.showEdit} getTodos={this.props.getTodos}/> : null }
                </div>
            </div>
        )
    }
}