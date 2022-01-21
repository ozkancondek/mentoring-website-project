import React from "react";
import { Link } from "react-router-dom";
import { AsideButton, AsideButtonContainer } from "./AsideStyles";

export const AsideBar = () => {
  return (
    <div>
      <AsideButtonContainer>
        <AsideButton>
          {" "}
          <Link to="/about">Newsletter</Link>{" "}
        </AsideButton>
        <AsideButton>
          {" "}
          <Link to="/about">Spenden</Link>{" "}
        </AsideButton>
        <AsideButton>
          {" "}
          <Link to="/about">Sponsoren</Link>{" "}
        </AsideButton>
      </AsideButtonContainer>
    </div>
  );
};
