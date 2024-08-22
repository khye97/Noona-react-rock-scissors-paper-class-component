function Box (props){  
  let result;

  if (props.player === "Computer" && props.result != "Tie" && props.result !== ""){
    result = props.result === "Win" ? "Lose" : "Win"
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <h2>{props.player}</h2>
      <img src={props.item ? props.item.img : "https://cdn-icons-png.flaticon.com/512/3524/3524335.png"} />
      <h3>{result}</h3>
    </div>
  )
}

export default Box;