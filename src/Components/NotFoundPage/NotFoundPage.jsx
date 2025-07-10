import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="bg-tired min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-7xl md:text-9xl font-extrabold text-main mb-4">404</h1>
        <p className="text-2xl md:text-4xl font-bold text-sec mb-2">الصفحة غير موجودة</p>
        <p className="text-sec text-lg mb-6">
          عذرًا، الصفحة التي تحاول الوصول إليها غير متوفرة.
        </p>
        <NavLink
          to="/"
          className="inline-block bg-main text-sec hover:bg-orange-700 transition-all duration-300 px-6 py-3 rounded-full font-semibold text-lg shadow"
        >
          العودة للصفحة الرئيسية
        </NavLink>
      </div>
    </section>
  );
}


