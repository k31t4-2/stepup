import React from 'react';
import './App.css';
import InlineStyles from './Components/InlineStyles';
import { CssModules } from './Components/CssModules';
import { StyledJsx } from './Components/StyledJsx';
import { StyledComponents } from './Components/StyledComponents';
import { Emotion } from './Components/Emotion';


function App() {

  return (
    <div className="App">
      <InlineStyles />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion/>
    </div>
  );
}

export default App;
