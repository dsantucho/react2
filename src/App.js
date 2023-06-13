
import { ChatEngine } from 'react-chat-engine';
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine
        height = "100vh"
        projectID = "ddca086c-223a-4916-b8f8-2ffb7f990122"
        userName = "test"
        userSecret = "123456"
      />
    </div>
  );
}

export default App;
