import { ChatEngine } from 'react-chat-engine';
import { render } from 'react-dom';
import './App.css';
import ChatFeed from './components/ChatFeed'

const App = () => {

   return (
      < ChatEngine
      height="100vh"
      projectID="d27d3912-7ecb-4c8d-831f-29aaafe38f93"
      userName="discuterAdmin"
      userSecret="1234"
         
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
   
   />
   );

}

export default App;