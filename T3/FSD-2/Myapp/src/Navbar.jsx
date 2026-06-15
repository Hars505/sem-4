import React from "react";
import Sidebarimg from "../public/icons8-sidebar-50.png";
import Youtubelogo from "../public/OIP.jpg";
function Navbar({ toggleSidebar }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
        crossOrigin="anonymous"
      />
      <nav
        className="navbar navbar-expand-lg px-3 d-flex justify-content-between align-items-center"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "#202020",
        }}
      >
        {/* Left section: Hamburger and Logo */}
        <div className="d-flex align-items-center gap-3">
          <button
            className="btn border-0 text-white"
            onClick={toggleSidebar}
            style={{ fontSize: "1.2rem" }}
          >
            <img
              src={Sidebarimg}
              alt="sidebar"
              width={20}
              height={20}
              style={{ filter: "invert(1)" }}
            ></img>
          </button>
          <div
            className="navbar-brand mb-0 h1 d-flex align-items-center gap-1"
            style={{ cursor: "pointer" }}
          >
            <img
              src={Youtubelogo}
              alt="YoutubeLogo"
              width={40}
              height={20}
            ></img>
            <strong className="text-white">YouTube</strong>
          </div>
        </div>

        {/* Center section: Search Bar */}
        <div className="d-flex w-50">
          <div className="input-group">
            <input
              type="text"
              className="form-control rounded-start-pill border-secondary text-white"
              style={{ backgroundColor: "#121212" }}
              placeholder="Search"
            />
            <button
              className="btn btn-outline-secondary rounded-end-pill px-4"
              style={{ backgroundColor: "#303030", color: "white" }}
              type="button"
            >
              🔍
            </button>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <button
            className="btn rounded-pill text-white"
            style={{ backgroundColor: "#303030" }}
          >
            + Create
          </button>
        </div>
        {/* Right section: Icons and Profile */}
        <div className="d-flex align-items-center gap-3">
          <button className="btn text-white rounded-circle border-0 fs-5">
            🕭
          </button>
          <div
            className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
            style={{
              width: "35px",
              height: "35px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            U
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
