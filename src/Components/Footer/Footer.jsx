


import { NavLink } from "react-router-dom";
import imgLogo from "../../assets/2شرمب-زون-removebg-preview.png";

export default function Footer() {
  return (
    <footer className="bg-main text-sec shadow-sm">
      <div className="container mx-auto py-8 px-4 text-center">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
  
          <img
            src={imgLogo}
            className="h-28 mx-auto sm:mx-0"
            alt="Shrimp Zone Logo"
          />

      
          <ul className="flex flex-wrap justify-center sm:justify-end gap-4 text-base font-medium">
            <li>
              <NavLink
                className="hover:text-white transition duration-200"
                to="/"
              >
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-white transition duration-200"
                to="/menu"
              >
                المنيو
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-white transition duration-200"
                to="/about"
              >
                من نحن
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-white transition duration-200"
                to="/contact"
              >
                تواصل معنا
              </NavLink>
            </li>
          </ul>
        </div>

   
        <hr className="my-6 border-t border-sec/30" />

        <span className="block text-sm text-sec/80">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/mazenibrahim366/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-sec"
          >
            Mazen Ibrahim
          </a>{" "}
          — جميع الحقوق محفوظة
        </span>
      </div>
    </footer>
  );
}
