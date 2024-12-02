import "./App.css";
import { Footer, Header } from "./components";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="dark:bg-zinc-700">
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
