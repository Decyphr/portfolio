import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  min-height: ${({ height }) => height || "auto"};
  padding: ${({ pad }) => pad || 0};
  margin: ${({ margin }) => margin || 0};
`;

export const FlexBox = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  padding: ${({ pad }) => pad || 0};
  margin: ${({ margin }) => margin || "0 auto"};
  display: flex;
  flex-direction: ${({ col }) => col && 'column'};
  flex-wrap: wrap;
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'space-between'};

  @media (max-width: ${({ theme }) => theme.screenSize.md}) {
    flex-direction: column;
  }
`;