import "./Button.css";

export default function Button({ children, myClick }) {
  return (
    <button className="button" onClick={myClick}>
      {children}
    </button>
  );
}
