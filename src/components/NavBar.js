import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let counter =1

  return <nav>
    <a key= {counter++} href="#home">home</a>
    <a key= {counter++} href="#about">about</a>
    <a key= {counter++} href="#projects">projects</a>


  </nav>;
}

export default NavBar;
