import styled from 'styled-components';

export const Wrap = styled.div`
  width: 600px;
  margin: 50px auto 0;
  padding: 20px;
  border: 3px solid ${p => {
    return p.theme.khakiGreen
  }};
  border-radius: 20px;
  background-color: ${p => {
    return p.theme.accentGreen}};
`;

export const Heading = styled.h2`
  color: ${p => {
    return p.theme.mainColor
  }}
`;