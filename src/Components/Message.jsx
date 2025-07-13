import PropTypes from 'prop-types'

function Message(props){
    return(
        <div className="message">
            <p className="renderedMessage">{props.message}</p> 
            <h3 className="senderName"> {props.name}</h3>
            <p className="opened">{props.isOpened ? "Yes" : "No"}</p>
        </div>
    );
}
Message.protoTypes ={
    message: PropTypes.string,
    name: PropTypes.string,
    isOpened: PropTypes.bool,
}
Message.defaultProps ={
    message: "Nothing to read",
    name: "Username",
    isOpened: true,
}
export default Message