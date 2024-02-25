import "./Button.css";

export default function Button({ children, onMyClick }) {
  // function myClick1() {
  //   alert("click");
  // }

  // function handleClick() {
  //   alert("You clicked me!");
  // }

  // console.log(children);

  return (
    <button className="button" onClick={onMyClick}>
      {children}
    </button>
  );
}
