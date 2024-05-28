import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("navigation")!).render(
  <React.StrictMode>
    <div>
      {" "}
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <nav className="site-nav">
        <div className="container">
          <div className="row align-items-center">
            <div className="logo">
              <a href="index.html" className="text-black">
                DFD<span className="text-black">.</span>
              </a>
            </div>
            <div className="col-12 col-sm-12 col-lg-12 site-navigation text-left">
              <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li className="has-children d-none">
                  <a href="#">Pages</a>
                  <ul className="dropdown">
                    <li>
                      <a href="portfolio.html">Portfolio</a>
                    </li>
                    <li>
                      <a href="single.html">Single</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>

                    <li className="has-children">
                      <a href="#">Menu Two</a>
                      <ul className="dropdown">
                        <li>
                          <a href="#">Sub Menu One</a>
                        </li>
                        <li>
                          <a href="#">Sub Menu Two</a>
                        </li>
                        <li>
                          <a href="#">Sub Menu Three</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Menu Three</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="contact.html">Contact us</a>
                </li>
              </ul>

              <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right menu-absolute">
                <li className="cta-button">
                  <a href="#/" target="_blank">
                    Get a Free Quote
                  </a>
                </li>
              </ul>

              <a
                href="#"
                className="burger ml-auto site-menu-toggle js-menu-toggle d-block d-lg-none dark"
                data-toggle="collapse"
                data-target="#main-navbar"
              >
                <span></span>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- END container --> */}
      </nav>
      {/* <!-- END nav --> */}
    </div>
  </React.StrictMode>
);
