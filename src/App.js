import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import EnterPage from "./pages/EnterPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
import ProfilePageRename from "./pages/ProfilePageRename";
import OrderPage from "./pages/OrderPage";
import NewOrderPage from "./pages/NewOrderPage";
import ChatPage from "./pages/ChatPage";
import InfoOrderPage from "./pages/InfoOrderPage";
import Send_OrderPage from "./pages/Send_OrderPage";
import Car_Page from "../src/pages/Car_Page";
import LoginPage from "./pages/LoginPage";
import { UserProvider } from "./context/UserContext";
import ChatLogist from "./pages/ChatLogist";

function App() {
  return (
    <HashRouter>
      <UserProvider>
        <main>
          <Routes>
            <Route path="/" element={<EnterPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/rename" element={<ProfilePageRename />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/order/info" element={<InfoOrderPage />} />
            <Route path="/new-order" element={<NewOrderPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/chatLog" element={<ChatLogist />} />
            <Route path="/send-order" element={<Send_OrderPage />} />
            <Route path="/car" element={<Car_Page />} />
          </Routes>
        </main>
      </UserProvider>
    </HashRouter>
  );
}

export default App;
