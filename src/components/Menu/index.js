import React from "react";
import logo from "../../assets/images/gigaflix.png";
import "./Menu.css";
import Button from "../Button";
import { Link } from 'react-router-dom'
// import ButtonLink from "./components/ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="Gigaflix" />
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
