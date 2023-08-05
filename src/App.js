import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { Navbar } from "./components/Header/Navbar";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { DeactivateAccount } from "./components/Profile/deactivateAccount/DeactivateAccount";
import { ToastContainer,toast } from 'react-toastify';
import Announcement from "./pages/AnnouncementPage/Announcement"
import 'react-toastify/dist/ReactToastify.css';
import Offers from "./components/Announcement/Offers";
import Settings from "./pages/SettingsPage/Settings";
import { NavbarTry } from "./components/Header/NavbarTry";
function App() {
  return (
    <div className="App">
        <ToastContainer style={{ width: "330px" }} />
      <NavbarTry />
       <div className="" style={{display:'flex'}}>
        <div>

        <Sidebar />
        </div>
        <div className="w-[100%]" >
          <Routes>
            <Route exact path="/" element={<DashboardPage />} />
            <Route exact path="profile" element={<ProfilePage />} />

            <Route
              exact
              path="profile/deactivateAccount"
              element={<DeactivateAccount />}
            />
            <Route
              exact
              path="announcement"
              element={<Announcement />}
            />
            <Route
              exact
              path="settings"
              element={<Settings />}
            />
            <Route
              exact
              path="profile"
              element={<ProfilePage />}
            />
        
          </Routes>
        </div>
      </div> 

    </div>
  );
}

export default App;
