import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import { NavbarList } from "../helper/NavbarList";

import "../styles/navbar.css";  

function Navbar() {
  const [expandNavBar, setExpandNavbar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const handleGoBack = () => {
    document.documentElement.style.scrollBehavior = "auto";
    navigate(-1);
    // Re-enable smooth scroll behavior after a short delay
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 50);
  };

  return (
    <div className="navbar" id={expandNavBar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => setExpandNavbar((prev) => !prev)}>
          <ReorderIcon />
        </button>
      </div>
      <div className="nav_container">
        <Link to={"/"} className="logo">
          CM.
        </Link>
        <ul className="nav_links">
          {window.location.pathname === "/" ? (
            <>
              {NavbarList.map(({ name, id }, index) => (
                <li key={index}>
                  <a href={id}>{name}</a>
                </li>
              ))}
            </>
          ) : (
            <li>
              <a onClick={handleGoBack}>Retour</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;