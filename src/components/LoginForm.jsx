import { useState } from "react";
import axios from 'axios';
import { TaobaoCircleFilled } from "@ant-design/icons";


const LoginForm = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');


   const handleSubmit = async (event) => {
      event.preventDefault();

      const authObject = { 'Project-ID': "d27d3912-7ecb-4c8d-831f-29aaafe38f93", 'User-Name': username, 'User-Secret': password };
      
      try {
         await axios.get('https://api.chatengine.io/chats', { headers: authObject });

         localStorage.setItem('username', username);
         localStorage.setItem('password', password);

         window.location.reload();

      } catch (error) {
         setError('These credentials are incorrect!');
      }
   }

   return (
      <div className="wrapper">
         <div className="form">
            <h1 className="title">Discuter</h1>
            <form onSubmit={handleSubmit}>
               <input type="text"
                  className="input"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} required>
               </input>
               <input type="password"
                  className="input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} required>
               </input>
               <div align="center">
                  <button type="submit" className="button">
                     <span>Login</span>
                  </button>
               </div>
               <h2 className="error">{error}</h2>
            </form>
         </div>
      </div>
   );
}

export default LoginForm;