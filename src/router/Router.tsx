import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/Register/Register";
import { Layout } from "../components/Layout/Layout";
import Characters from "../pages/Characters/Characters";
import Movies from "../pages/Movies/Movies";
import Comics from "../pages/Comics/Comics";

function Router() {
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

export default Router;
