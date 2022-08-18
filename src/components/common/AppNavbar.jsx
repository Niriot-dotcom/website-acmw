import React from "react";

function AppNavbar() {
  return (
    <div>
      <ul id="nav-bar">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/members">Members</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
    </div>
  );
}

export default AppNavbar;
