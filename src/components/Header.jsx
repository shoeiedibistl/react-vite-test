import logo from "/logo.svg";

export default function Header() {
  let now = new Date(),
    name = "alt-img";
  return (
    <header>
      <img src={logo} alt={name} />

      {/* <h3>blah blah blah</h3> */}

      <span>now time: {now.toLocaleTimeString()}</span>
    </header>
  );
}
