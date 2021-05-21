import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
   
   const { chats, activeChat, userName, messages } = props;

   const chat = chats && chats[activeChat];

   
   const renderMessages = () => {
      const keys = Object.keys(messages);

      return keys.map((key, index) => {
         const message = messages[keys];
         const lastMessageKey = index === 0 ? null : keys[index - 1];
         const isMyMessage = userName === message.sender.username;

         return (
            <div key={'msg_${index}'} style={{ width: '100%' }}>
               <div className="message-block">
                  {
                     isMyMessage ? <MyMessage/> : <TheirMessage/>
                  }
               </div>
               <div className="read-recipts" style={{marginRight: isMyMessage ? '18px' : '0px',}}>

               </div>
            </div>
         )
      })
   }
   
   renderMessages()

   return (
      <dev>
         chatfeed
      </dev>
   );

}
 
export default ChatFeed;
