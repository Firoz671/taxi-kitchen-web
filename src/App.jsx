import { Suspense } from "react";
import "./App.css";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import OrderContainer from "./component/OrderContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loadData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const dataPromise = loadData();
  return (
    <div>
      <header className="w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </header>
      <section>
        <Hero>Kitchen Room</Hero>
      </section>
      <ToastContainer />
      <section>
        <Suspense fallback={<p>loading...</p>}>
          <OrderContainer dataPromise={dataPromise}></OrderContainer>
        </Suspense>
      </section>
    </div>
  );
}

export default App;
