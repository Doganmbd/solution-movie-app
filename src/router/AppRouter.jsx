import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* //! details den sonra ne gelirse gelsisn MovieDetaili render et / absolute ve relative path olarak değişir. */}
          <Route path="/details/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
