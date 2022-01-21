import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import { Home } from "../pages/Home";
import { Mentoring } from "../pages/Mentoring";

import { Mitmachen } from "../pages/Mitmachen";
import { Events } from "../pages/Events";
import { Blog } from "../pages/Blog";
import { Contact } from "../pages/Contact";
import { Profile } from "../pages/Profile";
import { Settings } from "../pages/Settings";
import { Apply } from "../pages/Apply";
import { TalkToAdvisor } from "../pages/TalkToAdvisor";
import { Login } from "../pages/Login";
import { Footer } from "../components/footer/Footer";

export const AppRouter = () => {
  const { isAuth } = useAuth();
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mentoring" element={<Mentoring />} />
        <Route path="/mitmachen" element={<Mitmachen />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        {isAuth ? (
          <Fragment>
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/talktoadvisor" element={<TalkToAdvisor />} />
          </Fragment>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
      <Footer />
    </Fragment>
  );
};
