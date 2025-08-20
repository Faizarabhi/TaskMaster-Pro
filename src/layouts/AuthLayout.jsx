import React from "react";
import { Outlet } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import Navbar from "../components/Navbar/Navbar";

export default function AuthLayout() {
  useTheme();
  return (
    <div className="bg-primary min-h-screen b-0 absolute w-full">
      <Navbar />
      <Outlet />
    </div>
  );
}
