import React from 'react'
import styled from 'styled-components'
import palette from './palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;



background: ${palette.blueGray[0]};
  &:hover {
    background: ${palette.blueGray[2]};
  }
`;



const Button = props => <StyledButton {...props} />;



export default Button;