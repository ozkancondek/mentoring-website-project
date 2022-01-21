import styled from "styled-components";

export const AsideButton = styled.div`
  width: 100px;
  height: 40px;
  background-color: red;
  padding-top:8px;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transform: rotate(-90deg);
  border-top-left-radius: 15px;
  border-top-right -radius: 15px;
  transition: font-size  1s;
  transition: height  1s;
 background-color:#5ccdda;
 >*{
     
     text-decoration:none;
      font-size: 1.2rem;
      font-weight:bolder;
      color:black;

 };
 
  &:hover {
    height: 80px;
   box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
     
  
  }
`;
export const AsideButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  right: 0px;
  top: 150px;

  height: 280px;
  width: 80px;
`;
