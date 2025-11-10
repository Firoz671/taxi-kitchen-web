import "./App.css";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <header className="w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </header>
      <section>
        <Hero>Kitchen Room</Hero>
      </section>
    </div>
  );
}

export default App;
