import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const Username = styled.p`
  font-weight: 700;
`;
export const ButtonLogIn = styled.button`
  font-size: 16px;
  border-radius: 8px;
  border: none;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: darkgray;
  }
`;
