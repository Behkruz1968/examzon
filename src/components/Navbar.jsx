import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Contexts } from "@/util/Context";
import im from "../assets/img/Link.png";

export default function Navbar() {
  const { t } = useTranslation("global");
  const { state } = useContext(Contexts);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={im} alt="zon.uz" className="h-8 w-auto" />
        </Link>

        {/* Kategoriyalar */}
        <button className="hidden md:flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-purple-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="text-sm font-medium">{t("navbar.modal")}</span>
        </button>

        {/* Qidiruv paneli */}
        <div className="w-full sm:w-auto flex-1 sm:mx-4">
          <label className="relative block w-full">
            <input
              type="text"
              placeholder={t("navbar.input")}
              className="w-full h-10 pl-4 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 2a8 8 0 106.32 13.906l4.387 4.387a1 1 0 001.414-1.414l-4.387-4.387A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
              </svg>
            </button>
          </label>
        </div>

        {/* Profil, Sevimlilar va Savat */}
        <div className="flex items-center gap-3 text-sm">
          <Link to="/profile" className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            {t("navbar.enter")}
          </Link>

          <Link to="/liked" className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            {t("navbar.liked")}
          </Link>

          <Link to="/saved" className="relative flex items-center gap-1 text-gray-700 hover:text-purple-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 4h-2l-1 2h2l1-2zm0 2h10l1 2h-12l1-2zm-1 4h12v10h-12v-10zm2 2v6h8v-6h-8z" />
            </svg>
            {t("navbar.savat")}
            {state.basket?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] rounded-full px-1.5 py-0.5">
                {state.basket.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
