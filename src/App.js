
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainLayout from './layout/MainLayout'
import Home from "./layout/Home"
import Course from "./layout/Course";
import RouteNotFound from "./layout/RouteNotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to='/home' />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/course" element={<Course />} />
          <Route exact path="/*" element={<RouteNotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
