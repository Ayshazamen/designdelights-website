import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../../styles/header.css";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

const nav_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/Designs",
    display: "Designs",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const profileActionRef = useRef(null);

  const { currentUser } = useAuth();

  // Define the logout function here
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged Out");
        navigate('/home')
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => menuRef.current.classList.toggle("menu_active");
  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show_profileActions");

  return (
    <header className="header" ref={headerRef}>
      <Row>
        <Col lg="4" md="3" sm="4">
          <div className="logo">
            <i class="ri-earth-fill"></i>
            <span>
              KitchenDecor
              <Link
                to="/home"
                className="d-flex align-items-center gap-1"
              ></Link>
            </span>
          </div>
        </Col>

        {/* =================Navigation starts=============== */}

        <div className="main_navbar">
          <Container>
            <div className="navigation_wrapper d-flex align-items-center justify-content-between">
              <span className="mobile_menu">
                <i class="ri-menu-line" onClick={toggleMenu}></i>
              </span>
              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <div className="menu">
                  {nav_links.map((item, index) => (
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active nav_item" : "nav_item"
                      }
                      key={index}
                    >
                      {item.display}
                    </NavLink>
                  ))}
                </div>
              </div>

              <div>
                <div className="nav_icons">
                  <div className="profile">
                    {currentUser ? (
                      <span>
                        <a href="Login" onClick={toggleProfileActions}>
                          <i class="ri-user-line"></i>
                        </a>
                      </span>
                    ) : (
                      <span>
                        <Link to="/login" onClick={toggleProfileActions}>
                          <i class="ri-user-line"></i>
                        </Link>
                      </span>
                    )}
                  </div>

                  <div
                    className="profile_action"
                    ref={profileActionRef}
                    onClick={toggleProfileActions}
                  >
                    {currentUser ? (
                      <span onClick={logout}>Logout</span>
                    ) : (
                      <div className="d-flex align-items-center justify-content-center flex-column">
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                       
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Container>

          {/* ===============Navigation ends=============== */}
        </div>
      </Row>
    </header>
  );
};

export default Header;