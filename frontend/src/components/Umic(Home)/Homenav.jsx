import { useState, useEffect, useRef } from "react";
import { Link,useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Sedrica from "../../assets/Sedrica.png";
import Umic from "../../assets/Umic.png";
import bars from "../../assets/bars.jpg";
import "./Homenav.css";

function Homenav() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(getActiveIndex(location.pathname));
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  function getActiveIndex(path) {
    switch (path) {
      case "/":
        return 0;
      case "/competitions":
        return 1;
      case "/Teams/Sedrica":
          return 2;
      case "/sponsors":
        return 3;
      default:
        return 0;
    }
  }

  useEffect(() => {
    setActiveIndex(getActiveIndex(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleClick = (index) => {
    setActiveIndex(index);
    if (window.innerWidth <= 611) {
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{ backgroundColor: "black", padding: "20px" }}>
      <div style={{ backgroundColor: "black", marginTop: "20px" }}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap'); \n .navigation {position: relative;height: 70px;display: flex;justify-content: flex-end;align-items: center;border: 2px solid white; padding:45px 0px 45px 45px;}.navigation ul {display: flex;}.navigation ul li {    position: relative;    width: 70px;  height: 70px;  list-style: none;  z-index: 1;}.navigation ul li a {position: relative;display: flex;justify-content: center;align-items: center;flex-direction: column;width: 100%;text-align: center; font-weight: 500;} .navigation ul li a .icon {   position: relative;    display: block;    line-height: 75px;    font-size: 1.5em;    text-align: center;    color: hsl(0, 0%, 100%, 40%);} .navigation ul li.active a .icon {    color: hsl(0, 0%, 100%);} .navigation ul li a .icon:hover{color: hsl(0, 0%, 100%); transform: scale(1.2);} .navigation ul li a .text {    position: absolute;color: whitesmoke;    font-weight: 400;    font-size: 0.75em;letter-spacing: 0.05em;    opacity: 0;    transform: translateY(35px);}  .navigation ul li.active a .text {    opacity: 1;} \n     .navigation ul li a .circle {\n            position: absolute;\n       top:60%;     display: block;\n            width: 50px;\n            height: 50px;\n            background: transparent;\n            border-radius: 50%;\n            border: 1.8px solid #fff;\n            transform: translateY(-37px) scale(0);\n    transition: transform 0.5s ease, left 0.5s ease;    }\n\n        .navigation ul li.active a .circle {\n                           transform: translateY(-37px) scale(1);\n        }\n\n     "
      }}
        />
        <div className="navigation">
          <img
            src={Umic}
            className="logo"
            alt="Logo"
            width="60"
            height="60"
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              objectFit: "contain",
            }}
          />
          <img
            src={Sedrica}
            className="logo"
            alt="Logo"
            width="150"
            height="100"
            style={{
              position: "absolute",
              left: "80px",
              top: "50%",
              transform: "translateY(-50%)",
              objectFit: "contain",
            }}
          />
          <ul>
            <li
              className={`list ${activeIndex === 0 ? "active" : ""}`}
              onClick={() => handleClick(0)}
            >
              <Link to="/">
                <span className="icon">
                  <ion-icon name="home"></ion-icon>
                </span>
                <span className="text">UMIC</span>
                <span className="circle" />
              </Link>
            </li>
            <li
              className={`list ${activeIndex === 1 ? "active" : ""}`}
              onClick={() => handleClick(1)}
            >
              <Link to="/competitions">
                <span className="icon">
                  <ion-icon name="trophy"></ion-icon>
                </span>
                <span className="text">Competition</span>
                <span className="circle" />
              </Link>
            </li>
            <li
              className={`list ${activeIndex === 2 ? "active" : ""}`}
              onClick={() => handleClick(2)}
            >
              <Link to="/Teams/Sedrica">
                <span className="icon">
                  <ion-icon name="car-sport"></ion-icon>
                </span>
                <span className="text">Sedrica</span>
                <span className="circle" />
              </Link>
            </li>
            <li
              className={`list ${activeIndex === 3 ? "active" : ""}`}
              onClick={() => handleClick(3)}
            >
              <Link to="/sponsors">
                <span className="icon">
                  <ion-icon name="people"></ion-icon>
                </span>
                <span className="text">Sponsors</span>
                <span className="circle" />
              </Link>
            </li>
         
          </ul>

          <div className="hamburger-menu icon" onClick={toggleMenu} style={{ position: "absolute",top:"20px", height: "50px" }}>
            <img height="40px" width="40px" style={{ bottom: "100px" }} src={bars} />
          </div>
        </div>

        <div ref={menuRef} className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => handleClick(0)}>UMIC</Link>
          <Link to="/competitions" onClick={() => handleClick(1)}>Competition</Link>
          <Link to="/Teams/Sedrica" onClick={() => handleClick(2)}>Sedrica</Link>
          <Link to="/sponsors" onClick={() => handleClick(3)}>Sponsors</Link>
          <a style={{ color: "red" }} href={location.pathname} onClick={() => handleClick(activeIndex)}>Close</a>
        </div>
      </div>
      <Helmet>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Helmet>
    </div>
  );
}

export default Homenav;
