import styled from "styled-components";

export const CardContainer = styled.div`
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;

  border-left: 50px solid #43555a;
  border-bottom: 2px solid grey;
  border-top: 2px solid grey;
`;
export const ImageContainer = styled.div`
  width: 400px;
  height: 450px;
  margin: auto;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const ImageContainerH = styled.div`
  width: 80%;
  height: 400px;
  margin: auto;
  margin-top: 30px;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  & {
    @media (max-width: 560px) {
      width: 70%;
      height: 350px;
    }
  }
`;
export const TextContainer = styled.div`
  height: 450px;
  width: 40%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  line-height: 2;
  align-items: flex-start;
  justify-content: center;
  padding: 5px;
  background-color: rgb(176, 132, 238);
  > div {
    display: flex;
    flex-direction: row;
    margin-left: 10px;

    border-bottom: 5px solid grey;
  }
  > * {
    font-size: 1.2rem;
    @media (max-width: 560px) {
      font-size: 0.7rem;
    }

    @media (max-width: 760px) {
      font-size: 0.9rem;
    }

    @media (max-width: 960px) {
      font-size: 1.1rem;
    }
    font-family: "Playfair Display", serif;
  }
`;
