// src/Card.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  max-width: 520px;
  height: 300px;
  border-radius: 15px;
  padding: 1.5rem;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  margin: 1rem;

  &:hover {
    transform: translateY(-20px);

    &:before {
      opacity: 1;
    }

    .info {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px;
  }
`;

const Info = styled.div`
  position: relative;
  z-index: 3;
  color: white;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5s;

  h1 {
    margin: 0;
  }

  p {
    letter-spacing: 1px;
    font-size: 15px;
    margin-top: 8px;
  }

  button {
    padding: 0.6rem;
    outline: none;
    border: none;
    border-radius: 3px;
    background: white;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      background: dodgerblue;
      color: white;
    }
  }
`;

const Card = ({ image, title, description }) => {
  return (
    <CardContainer>
      <img src={image} alt={title} />
      <Info className="info">
        <h1>{title}</h1>
        <p>{description}</p>
        <button>Read More</button>
      </Info>
    </CardContainer>
  );
};

export default Card;
