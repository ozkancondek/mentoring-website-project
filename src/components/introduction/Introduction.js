import React from "react";
import {
  CardContainer,
  ImageContainer,
  TextContainer,
} from "./StyleIntroduction";
import drops from "../../assets/drops.PNG";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

export const Introduction = () => {
  const images = {
    img1: drops,
  };
  let textParts = [
    "Ein mehrsprachiges, kompetenzsorientiertes Mentoring Programm für neu Zugewanderte und Migranten Jugendlichen.",
    "Jugendlichen werden Selbstbewusst in der Gesellschaft Fuß fassen.",
    "Dieses Programm wird den Bedarf an qualifizierten Arbeitskräften nachhaltig decken.",
  ];

  return (
    <div>
      <CardContainer>
        <ImageContainer img={images.img1} />
        <TextContainer>
          {textParts.map((part) => (
            <div>
              {/*  <LabelImportantIcon /> */}
              {part}
            </div>
          ))}
        </TextContainer>
      </CardContainer>
    </div>
  );
};
