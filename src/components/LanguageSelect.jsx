import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../features/ui/uiSlice";


export default function LanguageSelect() {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.ui);

  return (
    <select
      value={language}
      onChange={(e) => dispatch(setLanguage(e.target.value))}
      className="px-2 py-1 rounded border"
    >
      <option value="en">🇺🇸 English</option>
      <option value="fr">🇫🇷 Français</option>
      <option value="ar">🇲🇦 العربية</option>
    </select>
  );
}
