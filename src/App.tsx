import "./App.style.css";

import { Header, Body, Footer } from "./components";
import { DataProvider, backup } from "./useData";

function App() {
  return (
    <div className="app-container bg-dark-1">
      <Header />
      <DataProvider value={backup}>
        <Body />
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
