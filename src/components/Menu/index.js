import React from "react";
import logo from "../../assets/images/gigaflix.png";
import "./Menu.css";
import Button from "../Button";
// import ButtonLink from "./components/ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="Gigaflix" />
      </a>

      <Button as="a" href="/" className="ButtonLink">
        Novo vídeo
      </Button>
      {/* <ButtonLink href="/" className="ButtonLink">
        Novo vídeo
      </ButtonLink> */}
    </nav>
  );
}

export default Menu;
