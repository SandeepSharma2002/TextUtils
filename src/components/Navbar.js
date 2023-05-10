import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <div>
      <nav className ={`navbar navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <form className="d-flex" role="search">
            <div className={`custom-control custom-switch text- ${props.mode === "light" ? "dark":"light"}`}>
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
                onClick={props.toggleMode}
              />
              <label className="custom-control-label" htmlFor="customSwitch1">
                Enable Dark Mode
              </label>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Hello!",
};
