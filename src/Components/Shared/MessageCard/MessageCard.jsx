import Message from './Message.jsx';

function MessageCard(){
    let messages=""
    return(
        <div className='messageCard'>
            <Message message="Enter message here" name="Sender" />
        </div>
    );
} 
export default MessageCard