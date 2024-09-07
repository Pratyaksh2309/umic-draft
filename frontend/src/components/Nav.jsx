import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Sedrica from "../assets/Sedrica.png";
import Umic from "../assets/Umic.png";
import bars from "../assets/bars-solid.svg"
import "./Nav.css";

function MyClass() {
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
      case "/alumni":
        return 2;
      case "/sponsors":
        return 4;
      case "/Teams/Sedrica":
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
        "\n        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');\n\n         .navigation {\n            position: relative;\n               height: 70px;\n            background:\n                linear-gradient(205deg,\n #00fffc, #eee);\n            display: flex;\n            justify-content: flex-end;\n            align-items: center;\n            border-radius: 10px;\n        }\n\n        .navigation ul {\n            display: flex;\n              }\n\n        .navigation ul li {\n            position: relative;\n            width: 70px;\n            height: 70px;\n            list-style: none;\n            z-index: 1;\n        }\n\n        .navigation ul li a {\n            position: relative;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            flex-direction: column;\n            width: 100%;\n            text-align: center;\n            font-weight: 500;\n        }\n\n        .navigation ul li a .icon {\n            position: relative;\n            display: block;\n            line-height: 75px;\n            font-size: 1.5em;\n            text-align: center;\n            color: #000;\n            transition: .5s;\n        }\n\n        .navigation ul li.active a .icon {\n            transform: translateY(-32px);\n        }\n\n        .navigation ul li a .text {\n            position: absolute;\n            color: #000;\n            font-weight: 400;\n            font-size: .75em;\n            letter-spacing: .05em;\n            opacity: 0;\n            transform: translateY(20px);\n            transition: .5s;\n        }\n\n        .navigation ul li.active a .text {\n            opacity: 1;\n            transform: translateY(10px);\n        }\n\n        .navigation ul li a .circle {\n            position: absolute;\n            display: block;\n            width: 50px;\n            height: 50px;\n            background: transparent;\n            border-radius: 50%;\n            border: 1.8px solid #000;\n            transform: translateY(-37px) scale(0);\n        }\n\n        .navigation ul li.active a .circle {\n            transition: .5s;\n            transition-delay: .5s;\n            transform: translateY(-37px) scale(1);\n        }\n\n        .indicator {\n            position: absolute;\n            top: -60%;\n            width: 70px;\n            height: 70px;\n            background:\n                linear-gradient(0deg,\n                    #eee, #00fffc);\n            border: 6px solid #06021b;\n            border-radius: 50%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            transition: .5s;\n        }\n\n        .indicator::before {\n            content: '';\n            position: absolute;\n            top: 50%;\n            left: -22px;\n            width: 20px;\n            height: 20px;\n            background: transparent;\n            border-top-right-radius: 20px;\n            box-shadow: 1px -10px 0 #06021b;\n        }\n\n        .indicator::after {\n            content: '';\n            position: absolute;\n            top: 50%;\n            right: -22px;\n            width: 20px;\n            height: 20px;\n            background: transparent;\n            border-top-left-radius: 20px;\n            box-shadow: -1px -10px 0 #06021b;\n        }\n\n        .navigation ul li:nth-child(1).active~.indicator {\n            transform: translateX(calc(70px * 0));\n        }\n\n        .navigation ul li:nth-child(2).active~.indicator {\n            transform: translateX(calc(70px * 1));\n        }\n\n        .navigation ul li:nth-child(3).active~.indicator {\n            transform: translateX(calc(70px * 2));\n        }\n\n        .navigation ul li:nth-child(4).active~.indicator {\n            transform: translateX(calc(70px * 3));\n        }\n\n        .navigation ul li:nth-child(5).active~.indicator {\n            transform: translateX(calc(70px * 4));\n        }\n\n        /* -- External Social Link CSS Styles -- */\n\n        #source-link {\n            top: 120px;\n        }\n\n        #source-link>i {\n            color: rgb(94, 106, 210);\n        }\n\n        #yt-link {\n            top: 65px;\n        }\n\n        #yt-link>i {\n            color: rgb(219, 31, 106);\n\n        }\n\n        #Fund-link {\n            top: 10px;\n        }\n\n        #Fund-link>i {\n            color: rgb(255, 251, 0);\n\n        }\n\n        .meta-link {\n            align-items: center;\n            backdrop-filter: blur(3px);\n            background-color: rgba(255, 255, 255, 0.05);\n            border: 1px solid rgba(255, 255, 255, 0.1);\n            border-radius: 6px;\n            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);\n            cursor: pointer;\n            display: inline-flex;\n            gap: 5px;\n            left: 10px;\n            padding: 10px 20px;\n            position: fixed;\n            text-decoration: none;\n            transition: background-color 600ms, border-color 600ms;\n            z-index: 10000;\n        }\n\n        .meta-link:hover {\n            background-color: rgba(255, 255, 255, 0.1);\n            border: 1px solid rgba(255, 255, 255, 0.2);\n        }\n\n        .meta-link>i,\n        .meta-link>span {\n            height: 20px;\n            line-height: 20px;\n        }\n\n        .meta-link>span {\n            color: white;\n            font-family: \"Rubik\", sans-serif;\n            transition: color 600ms;\n        }\n    "
    }}
  />
        <div className="navigation">
        <img src={Umic} className="logo" alt="Logo" width="60" height="60" style={{ position: "absolute", left: "10px", top: "50%" ,transform: "translateY(-50%)",
    objectFit: "contain"}}/> 
          <img src={Sedrica} className="logo" alt="Logo" width="150" height="150" style={{ position: "absolute", left: "80px", top: "50%" ,transform: "translateY(-50%)",
    objectFit: "contain"}}/> 
          <ul>
            <li className={`list ${activeIndex === 0 ? "active" : ""}`} onClick={() => handleClick(0)}>
              <a href="/">
                <span className="icon"><ion-icon name="home"></ion-icon></span>
                <span className="text">UMIC</span>
                <span className="circle" />
              </a>
            </li>
            <li
              className={`list ${activeIndex === 1 ? "active" : ""}`}
              onClick={() => handleClick(1)}
            >
              <a href="/competitions">
                <span className="icon">
                  <ion-icon name="trophy"></ion-icon>
                </span>
                <span className="text">Competition</span>
                <span className="circle" />
              </a>
            </li>
            <li
              className={`list ${activeIndex === 2 ? "active" : ""}`}
              onClick={() => handleClick(2)}
            >
              <a href="/alumni">
                <span className="icon">
                  <ion-icon name="people-circle"></ion-icon>
                </span>
                <span className="text">Alumni</span>
                <span className="circle" />
              </a>
            </li>
            <li
              className={`list ${activeIndex === 3 ? "active" : ""}`}
              onClick={() => handleClick(3)}
            >
              <a href="/Teams/Sedrica">
                <span className="icon">
                  <ion-icon name="car-sport"></ion-icon>
                </span>
                <span className="text">Sedrica</span>
                <span className="circle" />
              </a>
            </li>
            <li
              className={`list ${activeIndex === 4 ? "active" : ""}`}
              onClick={() => handleClick(4)}
            >
              <a href="/sponsors">
                <span className="icon">
                  <ion-icon name="people"></ion-icon>
                </span>
                <span className="text">Sponsors</span>
                <span className="circle" />
              </a>
            </li>
            <div className="indicator" style={{ transform: `translateX(calc(70px * ${activeIndex}))` }} />
          </ul>

          <div className="hamburger-menu icon" onClick={toggleMenu} style={{position: "absolute",height:"50px"}}>
          <img height="40px" width="40px" style={{bottom:"100px"}}src={bars}/>
        </div>
        </div>
        
        <div ref={menuRef} className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <a href="/" onClick={() => handleClick(0)}>UMIC</a>
          <a href="/competitions" onClick={() => handleClick(1)}>Competition</a>
          <a href="/alumni" onClick={() => handleClick(2)}>Alumni</a>
          <a href="/Teams/Sedrica" onClick={() => handleClick(3)}>Sedrica</a>
          <a href="/sponsors" onClick={() => handleClick(4)}>Sponsors</a>
          <a style={{color:"red"}} href={location.pathname} onClick={() => handleClick(activeIndex)}>Close</a>
        </div>
      </div>
      <Helmet>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Helmet>
    </div>
  );
}

export default MyClass;
