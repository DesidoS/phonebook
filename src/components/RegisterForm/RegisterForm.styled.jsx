import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Field = styled.input`
  height: 32px;
  font-size: 24px;
  border-radius: 8px;
  border: none;
  padding: 5px;
`;

export const ButtonLogIn = styled.button`
  font-size: 16px;
  border-radius: 8px;
  border: none;
  padding: 8px;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    background-color: darkgray;
  }
`;
