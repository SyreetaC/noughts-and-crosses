import "./Button.css";

const Button = (props) => {
  return (
    <button
      type="button"
      className="btn btn-outline-primary game-btn"
      onClick={props.onClick}
      data-row={props.row}
      data-col={props.col}
    >
      {props.value}
    </button>
  );
};

export default Button;
