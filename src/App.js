import { useEffect, useState } from 'react';
import './App.css';
import Box from './component/Box.js'


// 1. 박스 2개 (내부에 타이틀(유저), 사진, 결과)
// 2. 가위바위보 버튼이 있음
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 됨
// 5. 3, 4번의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패결과에 따라 테두리 색이 바뀐다 (이기면 초록, 지면 빨강, 비기면 검정)


const choice = {
  rock: {
    name: "Rock",
    img: "image/rock.png"
  },
  scissors: {
    name: "Scissors",
    img: "image/scissors.png"
  },
  paper: {
    name: "Paper",
    img: "image/paper.png"
  }
}


function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');


  function play (userChoice){
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  }

  function randomChoice (){
    let itemArray = Object.keys(choice);    
    let randomNum = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomNum];
    return choice[final];
  }

  function judgement (user, computer){
    // user === computer 비김(tie)
    // user === rock, computer === scissors | user 이김
    // user === rock, computer === paper | user 짐
    // suer === scissors, computer === rock | user 짐
    // user === scissors, computer === paper | user 이김
    // user === paper, computer === rock | user 이김
    // user === paper, computer === scissors | user 짐
    
    if (user.name === computer.name){
      return "Tie";
    } else if (user.name === "Rock"){
      return computer.name === "Scissors" ? "Win" : "Lose";
    } else if (user.name === "Paper"){
      return computer.name === "Rock" ? "Win" : "Lose";
    } else if (user.name === "Scissors"){
      return computer.name === "Paper" ? "Win" : "Lose"
    }
  }

  return (
    <div className='wrap'>
      <h1 className='title'>Rock Scissors Paper!</h1>
      <div className='out-box'>
        <Box player="You" item={userSelect} result={result} />
        <Box player="Computer" item={computerSelect} result={result} />
      </div>
      <div className='btn-box'>
        <button className='btn scissors' onClick={() => { play("scissors") }}>
          <img src="image/scissors.png" />
        </button>
        <button className='btn rock' onClick={() => { play("rock") }}>
          <img src="image/rock.png" />
        </button>
        <button className='btn paper' onClick={() => { play("paper") }}>
          <img src="image/paper.png" />
        </button>
      </div>
    </div>
  );
}

export default App;