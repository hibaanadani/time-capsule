function Message(props){
    return(
        <div>
            <p className="renderedMessage">{props.message}</p> 
            <h3 className="senderName"> {props.name}</h3>
            <p className="opened">{props.isOpened ? "Yes" : "No"}</p>
        </div>
    );
}
export default Message