import './App.css';
import { UserProvider } from './Providers/UserProvider';
import { Router } from "./Router/Router";



function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
