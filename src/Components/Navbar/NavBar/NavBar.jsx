


import React from 'react';
import imgLogo from "../../../assets/شرمب-زون-removebg-preview.png";
import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  Button,
} from 'flowbite-react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-tired font-bold border-b-2 border-tired transition duration-300 text-center'
      : 'text-sec hover:text-white transition duration-300 text-center';

  return (
    <div className="shadow-md bg-main z-50 sticky top-0">
      <Navbar fluid rounded className="bg-main text-sec container mx-auto py-2">

        <NavbarBrand href="/" className="flex items-center gap-2 w-56">
          <img
            src={imgLogo}
            className="h-10"
            alt="Shrimp Zone Logo"
          />
          <span className="text-2xl font-extrabold text-sec">Shrimp Zone</span>
        </NavbarBrand>


        <div className="flex md:order-2 justify-end items-center gap-3  w-56  ">
          <a
            href="https://wa.me/01020669592"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="bg-tired hover:bg-red-800 text-sec font-semibold transition-all duration-300">
              اطلب دلوقتي
            </Button>
          </a>
          <NavbarToggle />
        </div>

    
        <NavbarCollapse className="gap-6 text-lg font-medium ">
          <NavLink to="/" className={navLinkClass}>
            الرئيسية
          </NavLink>
          <NavLink to="/menu" className={navLinkClass}>
            المنيو
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            من نحن
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            تواصل معنا
          </NavLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
