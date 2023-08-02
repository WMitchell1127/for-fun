const StyleController = (props) =>{
    const theme = store.getState().theme
    return(
        <div>
            <TextController changeText={props.changeText} />
            <ThemeController />
            <button onClick={props.toggleStyle} className={`btn ${theme} close-style-input`}>Close</button>
        </div>
    )
}