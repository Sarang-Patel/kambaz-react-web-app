import { Routes, Route, Navigate, useLocation } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./style.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/session";
import { useSelector } from "react-redux";
import LandingPage from "./landingPage";

export default function kambaz() {
  const {currentUser} = useSelector((state: any) => state.accountReducer);

  const {pathname} = useLocation();

  
  return (
    <Session>
      <div id="wd-kambaz" className="d-flex">
        {!pathname.includes("Home") && <KambazNavigation />}
        <div className="wd-main-content-offset p-3 w-100">
          <Routes>
            <Route path="/" element={<Navigate to={ currentUser ? "/Kambaz/Account" : "/Kambaz/Home" } />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Home" element={<LandingPage />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
