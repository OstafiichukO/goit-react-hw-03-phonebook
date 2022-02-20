import styled from '@emotion/styled';

export const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  padding: 5px;
  width: 100px;
  font-size: 18px;
  font-weight: 400;
  font-family: italic;
  border-radius: 5px;
  color: white;
  background-color: #4d7aff;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #ca2121;
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  font-family: italic;
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 7px;
`;
