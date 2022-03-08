import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  flex-wrap: wrap;
`;

export const ListContent = styled.div`
  background-color: #ee9b00;
  width: 90%;
  border-radius: 18px;
  margin-bottom: 25px;

  ul {
    width: 100%;
  }

  li {
    width: 100%;
    color: black;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
  }

  .last {
    border-bottom: none;
  }

  img {
    width: 140px;
    height: 140px;
    filter: drop-shadow(2px 4px 6px black);
    padding: 15px 5px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  button {
    width: 90%;
    height: 35px;
  }

  @media (min-width: 530px) {
    div {
      flex-direction: row;
      width: 65%;
      justify-content: space-between;
    }

    button {
      width: 140px;
      margin-right: 10px;
    }
  }

  @media (min-width: 870px) {
    width: 478px;
    margin-right: 15px;
  }
`;

export const InfoContent = styled.div`
  max-width: 350px;
  width: 60%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
  color: black;
  background-color: #ee9b00;
  border-radius: 8px;
  justify-content: space-evenly;

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  button {
    width: 80%;
    height: 35px;
  }

  .button-return {
    width: 50%;
  }
`;
