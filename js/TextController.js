
class TextController extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        this.setState({
            ...this.state,
            value: store.getState().font
        })
    }
    handleChange(e) {
        let { value } = e.target
        this.setState({
            ...this.state,
            value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        store.dispatch(setFont(this.state.value))
        this.props.changeText()
    }
    render() {
        const theme = store.getState().theme
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <select className="f-input" value={this.state.value} onChange={this.handleChange}>
                            <option value="default-txt">Default</option>
                            <option value="shadow-txt">Handwritten</option>
                            <option value="hm-txt">More Formal</option>
                        </select>
                    </label>
                    <input className={`btn ${theme} submit-btn`} type="submit" value="Change Text" />
                </form>
            </div>
        )
    }
}