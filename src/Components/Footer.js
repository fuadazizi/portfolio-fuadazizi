import React from 'react'

import "../Assets/Styles/footer.scss";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="bg-dark-green" id="go-top">
        <div className="text-center text-white" onClick={scrollToTop}>
          <p className="fs-medium mb-1">End of Page</p>
          <p className="fs-medium">(Click to back to top)</p>
        </div>
      </div>
      <div id="footer">
        <div className="container text-white">
          <div className="topper row fs-medium justify-content-end">
            <div className="ml-auto">
              <p className="text-end" id="hooker-text">
                Have something in mind?
                <br /> Let's collaborate!
              </p>
            </div>
          </div>
          <div className="downer row fs-regular">
            <div className="col">
              <p>© 2024 Nur Fuad Azizi</p>
            </div>
            <div className="col d-flex justify-content-end" id="socmed">
              <span><a href="https://id.linkedin.com/in/fuad-azizi">LinkedIn</a></span>
              <span><a href="https://github.com/fuadazizi">Github</a></span>
              <span><a href="https://instagram.com/fuadazizi_">Instagram</a></span>
              <span><a href="mailto:nfuadazizi@gmail.com">Email</a></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};