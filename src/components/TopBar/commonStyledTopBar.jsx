import styled from "styled-components";
import backBtn from "../../assets/images/icon-arrow-left.png";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 390px;
  height: 48px;
  margin: 0 auto;
  padding: 0 12px;
  border-bottom: solid 0.5px #DBDBDB;;
  /* background-color: bisque; */
`;

export const StyledH1 = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;

export const StyledBtn = styled.button`
  width: 22px;
  height: 22px;
  background: url(${ backBtn }) no-repeat center / 100%;
`;

export const StyledImg = styled.img`
  width: 100%;
`;
