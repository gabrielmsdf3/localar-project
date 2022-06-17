import React from "react";
import { ContainerHeader } from "../styles/Styles";

const Header = () => {
  return (
    <div>
      <ContainerHeader>
        <nav>
          <ul>
            <li>Home</li>
            <li>contato</li>
          </ul>
        </nav>
      </ContainerHeader>
    </div>
  );
};

export default Header;
