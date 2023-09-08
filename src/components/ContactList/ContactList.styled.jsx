import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

export const List = styled.ul`
  height: 200px;
  & > li:nth-child(odd) {
    color: ${p => {
      return p.theme.lightText;
    }};
    background-color: ${p => {
      return p.theme.mainColor;
    }};
  }
  & > li:nth-child(even) {
    color: ${p => {
      return p.theme.lightText;
    }};
    background-color: ${p => {
      return p.theme.khakiGreen;
    }};
  }
  &::-webkit-scrollbar {
    display: none;
  }
  & > li:last-child {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  border-radius: 10px;
  overflow: hidden scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const DeleteBtn = styled.button`
  font-size: 18px;
  height: 30px;
  padding: 5px;
  border: 2px solid
    ${p => {
      return p.theme.khakiGreen;
    }};
  border-radius: 10px;
  color: ${p => {
    return p.theme.mainColor;
  }};
  background-color: ${p => {
    return p.theme.accentGreen;
  }};
  transition: background-color ${p => p.theme.trans},
    color ${p => p.theme.trans};
  cursor: pointer;
  &:hover {
    background-color: ${p => {
      return p.theme.buttonColor;
    }};
  }
`;
