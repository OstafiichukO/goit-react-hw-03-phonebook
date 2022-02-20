import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border: 2px solid #4d7aff;
  border-radius: 7px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledSpan = styled.span`
  display: flex;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
  font-family: italic;
`;

export const StyledInput = styled.input`
  padding: 5px;
  font-size: 18px;
  font-weight: 400;
  font-family: italic;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  width: 200px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 18px;
  font-weight: 400;
  font-family: italic;
  border-radius: 5px;
  color: white;
  background-color: #4d7aff;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #5bda52;
    color: black;
  }
`;
