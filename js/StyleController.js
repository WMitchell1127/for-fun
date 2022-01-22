const StyleController = (props) =>{
    return(
        <div>
            <TextController changeText={props.changeText} text={props.font}/>
        </div>
    )
}