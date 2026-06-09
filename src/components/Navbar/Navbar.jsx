import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "menu",
      "reviews",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + 180;

      sections.forEach((section) => {
        const element =
          document.getElementById(section);

        if (!element) return;

        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition <
            offsetTop + height
        ) {
          setActive(section);
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const handleClick = (section) => {
    setActive(section);
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img
          src={logo}
          alt="Chill & Swirl"
          className={styles.logo}
        />
      </div>

      <ul className={styles.navLinks}>
        <li>
          <a
            href="#hero"
            className={
              active === "hero"
                ? styles.active
                : ""
            }
            onClick={() =>
              handleClick("hero")
            }
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className={
              active === "about"
                ? styles.active
                : ""
            }
            onClick={() =>
              handleClick("about")
            }
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#menu"
            className={
              active === "menu"
                ? styles.active
                : ""
            }
            onClick={() =>
              handleClick("menu")
            }
          >
            Menu
          </a>
        </li>

        <li>
          <a
            href="#reviews"
            className={
              active === "reviews"
                ? styles.active
                : ""
            }
            onClick={() =>
              handleClick("reviews")
            }
          >
            Reviews
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={
              active === "contact"
                ? styles.active
                : ""
            }
            onClick={() =>
              handleClick("contact")
            }
          >
            Contact
          </a>
        </li>
      </ul>

      <button
        className={styles.mobileBtn}
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        {menuOpen ? (
          <FaTimes />
        ) : (
          <FaBars />
        )}
      </button>

      <div
        className={`${styles.mobileMenu} ${
          menuOpen
            ? styles.showMenu
            : ""
        }`}
      >
        <a
          href="#hero"
          className={
            active === "hero"
              ? styles.activeMobile
              : ""
          }
          onClick={() =>
            handleClick("hero")
          }
        >
          Home
        </a>

        <a
          href="#about"
          className={
            active === "about"
              ? styles.activeMobile
              : ""
          }
          onClick={() =>
            handleClick("about")
          }
        >
          About
        </a>

        <a
          href="#menu"
          className={
            active === "menu"
              ? styles.activeMobile
              : ""
          }
          onClick={() =>
            handleClick("menu")
          }
        >
          Menu
        </a>

        <a
          href="#reviews"
          className={
            active === "reviews"
              ? styles.activeMobile
              : ""
          }
          onClick={() =>
            handleClick("reviews")
          }
        >
          Reviews
        </a>

        <a
          href="#contact"
          className={
            active === "contact"
              ? styles.activeMobile
              : ""
          }
          onClick={() =>
            handleClick("contact")
          }
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;