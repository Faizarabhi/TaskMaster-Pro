import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/ui/uiSlice";


export default function ToggleMode() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.ui);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-3 py-1 rounded border"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
