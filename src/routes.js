import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser/EditUser";
import Header from "./components/Header/Header";
import UserDetails from "./components/UserDetails/UserDetails";
import Users from "./components/Users/Users";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
