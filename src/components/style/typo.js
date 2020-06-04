import styled from 'styled-components';

export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 800;
  font-size: 3.5rem;
  margin: 0;
  padding: 0;
  color: ${({ color, theme }) => color || theme.colors.primary};

  &::after {
    content: "";
    display: block;
    width: 200px;
    border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
    margin: 10px 0;
  }
`;

export const SubHeading = styled.p`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 600;
  font-size: 1.075rem;
  line-height: 150%;
  margin: 0;
  padding: 0;
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-weight: normal;
  font-size: .95rem;
  line-height: 200%;
  max-width: ${({ maxWidth }) => maxWidth || '450px'};
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.screenSize.md}) {
    font-size: 1.05rem;
  }
`;