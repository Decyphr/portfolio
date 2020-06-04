import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ color }) => color || 'none'};
  border: 1px solid ${({ color, theme }) => color || theme.colors.highlight};
  border-radius: 5px;
  padding: 10px 30px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  min-width: 250px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${({ color, theme }) => color ? 'none' : theme.colors.highlight};
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.8);
  }

  &:active {
    box-shadow: none;
  }

  &:focus {
    outline: none;
  }

`;