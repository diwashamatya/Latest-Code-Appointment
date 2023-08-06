import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { Navbar } from "./components/Header/Navbar";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { DeactivateAccount } from "./components/Profile/deactivateAccount/DeactivateAccount";
import { ToastContainer } from "react-toastify";
import Announcement from "./pages/AnnouncementPage/Announcement";
import "react-toastify/dist/ReactToastify.css";
import Offers from "./components/Announcement/Offers";
import Settings from "./pages/SettingsPage/Settings";
import { NavbarTry } from "./components/Header/NavbarTry";
import Appointment from "./pages/Appointment/Appointment";
import Form from "./pages/SIGNUP/Form";
import LoginForm from "./pages/SIGNIN/LoginForm";

function App() {
  const location = useLocation();

  const isLoginPageOrSignup =
    location.pathname === "/" || location.pathname === "/signup";

  return (
    <div className="App">
      {!isLoginPageOrSignup && (
        <>
          <ToastContainer style={{ width: "330px" }} />
          <NavbarTry />
          <div style={{ display: "flex" }}>
            <div>
              <Sidebar />
            </div>
            <div className="w-[100%]">
              <Routes>
                <Route exact path="/dashboard" element={<DashboardPage />} />
                <Route exact path="/signup" element={<Form />} />
                <Route exact path="/profile" element={<ProfilePage />} />
                <Route
                  exact
                  path="/profile/deactivateAccount"
                  element={<DeactivateAccount />}
                />
                <Route exact path="/appointment" element={<Appointment />} />
                <Route exact path="/announcement" element={<Announcement />} />
                <Route exact path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </>
      )}
      {isLoginPageOrSignup && (
        <div>
          <Routes>
            <Route exact path="/" element={<LoginForm />} />
            <Route exact path="/signup" element={<Form />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
