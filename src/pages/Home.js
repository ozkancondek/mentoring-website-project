import React from "react";
import { InfoCards } from "../components/infoCards/InfoCards";
import { Introduction } from "../components/introduction/Introduction";
import { ImageContainerH } from "../components/introduction/StyleIntroduction";
import program from "../assets/monatlichprogram.PNG";
import { Footer } from "../components/footer/Footer";

export const Home = () => {
  return (
    <div>
      <Introduction />
      <InfoCards firstCard={0} lastCard={3} />
      <ImageContainerH img={program} style={{ width: "80%" }} />
      <InfoCards firstCard={3} lastCard={6} />
      <Footer />
    </div>
  );
};
