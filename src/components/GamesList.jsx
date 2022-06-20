import { StyledGamesList } from './styles/GamesList.styled';
import React from 'react';
import Card from './Card';

export default function GamesList() {
  return (
    <StyledGamesList>
        <h1>Popular Games</h1>
        <div id='card-box'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </StyledGamesList>
  )
}
