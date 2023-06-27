import { RecoilRoot } from 'recoil';
import './App.css';
import { UserProvider } from './Providers/UserProvider';
import { Router } from "./Router/Router";


function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;
