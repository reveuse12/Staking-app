import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StakingApp from "./pages/StakingApp";
import GetToken from "./pages/GetToken";
import Layout from "./Layout";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/stakingapp" exact element={<StakingApp />} />
          <Route path="/gettoken" exact element={<GetToken />} />
          <Route path="/contact" exact element={<Contact />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
