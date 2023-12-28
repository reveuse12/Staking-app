import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StakingApp from "./pages/StakingApp";
import GetToken from "./pages/GetToken";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/StakingApp" element={<StakingApp />} />
          <Route path="/GetToken" element={<GetToken />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
