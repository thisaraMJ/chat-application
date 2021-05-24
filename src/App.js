import { ChatEngine } from 'react-chat-engine';
import { render } from 'react-dom';
import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'


const App = () => {


   if (!localStorage.getItem('username')) return <LoginForm />

   return (
      < ChatEngine
         height="100vh"
         projectID="d27d3912-7ecb-4c8d-831f-29aaafe38f93"
         userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}
         
      // userName="siripala"
      // userSecret="siripala"   
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
   
   />
   );

}

export default App;