class ThemeController extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.makeAChange = this.makeAChange.bind(this)
    }
    componentDidMount(){
        this.setState({
            ...this.state,
            value : this.props.theme
        })
    }
    handleChange(e){
        let { value } = e.target
        this.setState({
            ...this.state,
            value
        }) 
    }
    handleSubmit(e){
        e.preventDefault()
        store.dispatch(setTheme(this.state.value))
        document.body.classList = `${this.state.value} body`
    }
    makeAChange(theme){
        this.props.changeTheme(theme)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                      <select className="f-input" value={this.state.value} onChange={this.handleChange}>
                        <option value="default-theme">Default</option>
                        <option value="purple-theme">Purple</option>
                        <option value="green-theme">Green</option>
                    </select>   
                    </label>
                   <input className={`btn ${store.getState().theme} submit-btn`} type="submit" value="Change Theme"/>
                </form> 
            </div>
        )
    }
}