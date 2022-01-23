const StyleController = (props) =>{
    return(
        <div>
            <TextController changeText={props.changeText} text={props.font} theme={props.theme}/>
            <ThemeController changeTheme={props.changeTheme} theme={props.theme} />
            <button onClick={props.toggleStyle} className={`btn ${props.theme} close-style-input`}>Close</button>
        </div>
    )
}