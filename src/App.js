import { Component } from "react";
import "./App.css";
import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      turn: "X",
    };
  }

  onClick = (event) => {
    const row = event.target.getAttribute("data-row");
    const col = event.target.getAttribute("data-col");
    const oldBoard = this.state.board;
    oldBoard[row][col] = this.state.turn;
    this.setState({
      board: oldBoard,
      turn: this.state.turn === "X" ? "O" : "X",
    });
  };

  render() {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="">
          <div className="d-inline">
            <Button
              row="0"
              col="0"
              onClick={this.onClick}
              value={this.state.board[0][0]}
            />
          </div>
          <div className="d-inline">
            <Button
              row="0"
              col="1"
              onClick={this.onClick}
              value={this.state.board[0][1]}
            />
          </div>
          <div className="d-inline">
            <Button
              row="0"
              col="2"
              onClick={this.onClick}
              value={this.state.board[0][2]}
            />
          </div>
        </div>
        <div className="">
          <div className="d-inline">
            <Button
              row="1"
              col="0"
              onClick={this.onClick}
              value={this.state.board[1][0]}
            />
          </div>
          <div className="d-inline">
            <Button
              row="1"
              col="1"
              onClick={this.onClick}
              value={this.state.board[1][1]}
            />
          </div>
          <div className="d-inline">
            <Button
              row="1"
              col="2"
              onClick={this.onClick}
              value={this.state.board[1][2]}
            />
          </div>
        </div>
        <div className="">
          <div className="d-inline">
            <Button
              row="2"
              col="0"
              onClick={this.onClick}
              value={this.state.board[2][0]}
            />
          </div>
          <div className="d-inline">
            <Button
              row="2"
              col="1"
              onClick={this.onClick}
              value={this.state.board[2][1]}
            />
          </div>
          <div className="d-inline">
            <Button
              row="2"
              col="2"
              onClick={this.onClick}
              value={this.state.board[2][2]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
