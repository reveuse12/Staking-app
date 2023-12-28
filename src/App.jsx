import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StakingApp from "./pages/StakingApp";
import GetToken from "./pages/GetToken";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StakingApp" element={<StakingApp />} />
        <Route path="/GetToken" element={<GetToken />} />
      </Routes>
    </>
  );
}

export default App;
