import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Signin from "./signin";
import ShopBase from "./shopbase";

// function App() {
//   return (
//     <div className="App">
//       <Shop />
//     </div>
//   );
// }
function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/shopbase" element={<ShopBase />} />
      </Routes>
    </main>
  );
}

export default App;
