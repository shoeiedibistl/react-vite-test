import Header from "./components/Header";
import { ways } from "./data";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";

export default function App() {
  function myClick() {
    console.log("click");
  }

  return (
    <div>
      <Header />
      <main>
        <h1>React first app</h1>
        <section>
          <h3>наш подход к обучению </h3>

          <ul>
            {ways.map((way) => (
              <WayToTeach title={way.title} description={way.description} />
            ))}

            <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            />
          </ul>
        </section>

        <section>
          <h3>чем мы отличаемся от других</h3>

          <Button onClick={() => console.log("hi")}>подход</Button>
          <Button onClick={myClick}>доступность</Button>
          <Button onClick={myClick}>концентрация</Button>
        </section>
      </main>
    </div>
  );
}
