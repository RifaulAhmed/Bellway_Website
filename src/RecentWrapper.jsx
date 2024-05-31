// src/CardWrapper.js
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  padding: 1rem;
`;

const RecentWrapper = () => {
  const cardsData = [
    {
      image: 'https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      title: 'Mountain',
      description: 'Lorem Ipsum is simply dummy text from the printing and typesetting industry',
    },
    {
      image: 'https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      title: 'Road',
      description: 'Lorem Ipsum is simply dummy text from the printing and typesetting industry',
    },
    {
      image: 'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&fit=crop&w=311&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      title: 'Protester',
      description: 'Lorem Ipsum is simply dummy text from the printing and typesetting industry',
    },
  ];

  return (
    <Wrapper className="wrapper">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </Wrapper>
  );
};

export default RecentWrapper;

