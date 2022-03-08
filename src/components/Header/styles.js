import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
  border-bottom: 2px solid;
  align-items: center;

  div {
    cursor: pointer;
  }

  h1 {
    font-size: 20px;
  }

  span {
    font-weight: 600;
    font-size: 18px;
  }
`;

export const SpanNumber = styled.span`
  span {
    position: absolute;
    margin-left: 5px;
    color: #9b2226;
    margin-top: -35px;
    background-color: #ee9b00;
    padding: 5px;
    border-radius: 20px;
    font-size: 14px;
    height: 15px;
    width: 15px;
    display: flex;
    justify-content: center;
    font-size: 14px;
  }
`;

export const SpanText = styled.span`
  margin-left: 5px;
`;
