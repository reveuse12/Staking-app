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
          <Route path="/stakingapp" exact element={<StakingApp />} />
          <Route path="/gettoken" exact element={<GetToken />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
