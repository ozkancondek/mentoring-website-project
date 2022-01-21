import React from "react";
import { InfoCards } from "../components/infoCards/InfoCards";
import { Introduction } from "../components/introduction/Introduction";
import { ImageContainerH } from "../components/introduction/StyleIntroduction";
import program from "../assets/monatlichprogram.PNG";
import { Footer } from "../components/footer/Footer";
import { ContainerWithButton } from "../components/textfotowithbutton/ContainerWithButton";
import { AsideBar } from "../components/asideButtons/AsideBar";

export const Home = () => {
  return (
    <div>
      <AsideBar />
      <Introduction />
      <InfoCards firstCard={0} lastCard={3} />
      <ImageContainerH img={program} style={{ width: "80%" }} />
      <InfoCards firstCard={3} lastCard={6} />
      <ContainerWithButton />
    </div>
  );
};
