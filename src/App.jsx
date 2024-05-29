import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import About from "./pages/About";
import Order from "./pages/Order";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/order" element={<Order />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
