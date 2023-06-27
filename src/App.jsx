import './App.css';
import axios from "axios";

function App() {

  const onClickUsers = () => {
    // alert("users");

    // .then()でデータを取得した後に実行する関数を指定できる
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      console.log(result.data);
    })
    .catch((err) => console.log(err))
  }
  const onClickUser1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/3").then((result) => {
      console.log(result.data);
    })
    .catch((err) => console.log(err))
}


  return (
    <>
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
    </>
  );
}

export default App;
