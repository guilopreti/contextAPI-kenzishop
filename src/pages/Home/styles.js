import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;

  ul {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    max-width: 783px;
  }

  li {
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 12px;
    align-items: center;
    background-color: #ca6702;
    margin-right: 7px;
    margin-bottom: 10px;
    color: black;
  }

  h2 {
    font-size: 20px;
    margin-top: 10px;
    font-weight: 700;
  }

  img {
    width: 150px;
    height: 150px;
    margin: 10px 0px;
    border-radius: 8px;
    background-color: #ee9b00;
    padding: 10px;
    border: 2px solid black;
    filter: drop-shadow(2px 4px 6px black);
  }

  p {
    margin: 5px 10px 10px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-align: justify;
    line-height: 20px;
  }

  span {
    align-self: flex-start;
    margin-left: 10px;
  }

  button {
    margin-top: 10px;
    height: 35px;
    width: 92%;
  }
`;
