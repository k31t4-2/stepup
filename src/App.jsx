import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import './App.css';
import { Router } from "./Components/Router/Router";



function App() {

  return (
    // BrowserRouterでかこわないと、router-domの処理ができない
    <BrowserRouter>
      <div className="App">
        {/* Linkは、画面遷移の設定 */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/About">About</Link>
        <br />
        <Link to="/Recruit">Recruit</Link>
      </div>

      {/* Routerを別のファイルで定義する */}
      <Router/>
    </BrowserRouter>
  );
}

export default App;
