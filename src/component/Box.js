import React, { Component } from "react";
// function Box (props){  
//   let result;

//   if (props.player === "Computer" && props.result != "Tie" && props.result !== ""){
//     result = props.result === "Win" ? "Lose" : "Win"
//   } else {
//     result = props.result;
//   }

//   return (
//     <div className={`box ${result}`}>
//       <h2>{props.player}</h2>
//       <img src={props.item ? props.item.img : "https://cdn-icons-png.flaticon.com/512/3524/3524335.png"} />
//       <h3>{result}</h3>
//     </div>
//   )
// }

// export default Box;

export default class Box extends Component {

  render(){
    let result;
    if (this.props.player === "Computer" && this.props.result != "Tie" && this.props.result !== ""){
      result = this.props.result === "Win" ? "Lose" : "Win"
    } else {
      result = this.props.result;
    }

    return (
      <div className={`box ${result}`}>
        <h2>{this.props.player}</h2>
        <img src={this.props.item ? this.props.item.img : "https://cdn-icons-png.flaticon.com/512/3524/3524335.png"} />
        <h3>{result}</h3>
      </div>
    )
  }
}