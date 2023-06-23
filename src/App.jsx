import { useCallback, useState } from 'react';
import './App.css';
import ChildArea from './Components/ChildArea';


function App() {
  // 以下のコンポーネントを更新したらAppコンポーネントのみ再レンダリングが起きる
  const [text, setText] = useState("")
  console.log({text});

  // 以下のstateを更新したらchildAreaコンポーネントが発動
  const [open, setOpen] = useState(false)

  const changeText = (e) => setText(e.target.value)

  // falseのopenが!なので、trueになり表示される
  // 再生成されてもOK。なぜならtrueとfalseで中身を違うから
  const clickToggle = () => setOpen(!open);

  // 再生成されてNG。
  // なぜなら、毎回falseで値は同じなので処理が変わらない場合はuseCallbackで制御する
  const onClickClose = useCallback(() => setOpen(false),[]);

  return (
    <div className="App">
      <input
        value={text}
        onChange={changeText}
      />
      <br />
      <br />
      <button onClick={clickToggle}>表示 / 非表示</button>
      <ChildArea open={open} onClickClose={onClickClose}/>
    </div>
  );
}

export default App;
