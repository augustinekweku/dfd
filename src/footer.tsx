import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("footer")!).render(
  <React.StrictMode>
    <div className="site-footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="widget">
              <h3>About</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live.
              </p>
            </div>
            <div className="widget">
              <h3>Connect with us</h3>
              <ul className="social list-unstyled">
                <li>
                  <a href="#">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/drylinerf?s=11">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/drylinersfnr?igsh=czYwaTZ0aWdrbzBz&utm_source=qr">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
                <li className="d-none">
                  <a href="#">
                    <span className="icon-dribbble"></span>
                  </a>
                </li>
                <li className="d-none">
                  <a href="#">
                    <span className="icon-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-12">
                <div className="widget">
                  <h3>Navigations</h3>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <div className="widget">
                  <ul className="links list-unstyled">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Work</a>
                    </li>
                    <li>
                      <a href="#">Process</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <div className="widget">
                  <ul className="links list-unstyled">
                    <li>
                      <a href="#">Press</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4">
                <div className="widget">
                  <ul className="links list-unstyled">
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Process</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center text-center copyright">
          <div className="col-md-8">
            <p>
              Copyright &copy;
              {new Date().getFullYear()}. All Rights Reserved. &mdash; Designed
              with love by
              <a href="#">Nanitech</a>
              {/* <!-- License information: #/license/ --> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>
);
