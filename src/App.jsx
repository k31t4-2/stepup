import { useState } from 'react';
import './App.css';
import ChildArea from './Components/ChildArea';


function App() {
  const [text, setText] = useState("")
  const [open, setOpen] = useState(false)


  const changeText = (e) => setText(e.target.value)

  const clickToggle = () => {
    // falseのopenが!なので、trueになり表示される
    setOpen(!open)
  }

  return (
    <div className="App">
      <input
        value={text}
        onChange={changeText}
      />
      <br />
      <br />
      <button onClick={clickToggle}>表示 / 非表示</button>
      <ChildArea open={open}/>
    </div>
  );
}

export default App;
