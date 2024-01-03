import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import UserPage from "./pages/UserPage/UserPage";
import reportWebVitals from "./reportWebVitals";
import UserActivity from "./pages/UserPage/UserActivity";
import UserAverageSession from "./pages/UserPage/UserAverageSession";
import TodayScore from "./pages/UserPage/TodayScore";
import UserProfil from "./pages/UserPage/UserProfil";
import UserKeyData from "./pages/UserPage/UserKeyData";
import NotFound from "./pages/UserPage/notFound";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<NotFound />}/>
      <Route path="/user/:userId" element={<UserPage />} />
      <Route path="/user/:userId/activity" element={<UserActivity />} />
      <Route
        path="/user/:userId/average-sessions"
        element={<UserAverageSession />}
      />
      <Route path="/user/:userId/today-score" element={<TodayScore />} />
      <Route path="/user/:userId/activities" element={<UserProfil />} />
      <Route path="/user/:userId/key-data " element={<UserKeyData />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();