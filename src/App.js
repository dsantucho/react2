
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './component/ChatFeed';

function App() {
  return (
    <div className="App">
      <ChatEngine
        height = "100vh"
        projectID = "ddca086c-223a-4916-b8f8-2ffb7f990122"
        userName = "test"
        userSecret = "123456"
        renderChatFeed = {(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        onNewMessage = {()=> new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
