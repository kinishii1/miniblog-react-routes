import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Menu from "./components/Menu";
import GlobalStyles from "./components/GlobalStyles";
import DefaultPage from "./components/DefaultPage";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/posts/:id' element={<Post />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
