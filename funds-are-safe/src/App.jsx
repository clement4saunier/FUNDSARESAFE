import "./App.css";
import Header from "./components/layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/pages/Create";
import Home from "./components/pages/Home";
import Funding from "./components/pages/Funding";
import Details from "./components/pages/Details";
import useWallet from "./components/hooks/useWallet";
import { WalletContext } from "./components/context/Wallet";

function App() {
  const wallet= useWallet();

  return (
    <div className="App">
      <WalletContext.Provider value={wallet}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/funding/:contract" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </WalletContext.Provider>
    </div>
  );
}

export default App;
