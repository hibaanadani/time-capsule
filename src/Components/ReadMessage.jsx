import Message from './Message.jsx';

function ReadMessage(){
    let messages=""
    return(
        <div className='messageContent'>
            <Message message="Enter message here" name="Sender" isOpened={true} />
        </div>
    );
} 
export default ReadMessage