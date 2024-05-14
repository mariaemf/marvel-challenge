import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Register from "./pages/Register/Register";
import Characters from "./pages/Characters/Characters";
import Comics from "./pages/Comics/Comics";
import Movies from "./pages/Movies/Movies";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />

        <Route element={<Layout />}>
          <Route path="/characters" element={<Characters />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/comics" element={<Comics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
