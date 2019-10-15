import styled from 'styled-components';

export const Container = styled.aside`
  background: #202225;
  padding: 20px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TurmaList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Turma = styled.button`
  border: 0;
  background: transparent;
  margin: 0 0 8px;
  cursor: pointer;

  img {
    transition: all 0.2s;
    border-radius: 50%;

    width: 50px;
    height: 50px;
  }

  &:hover img {
    border-radius: 30%;
  }
`;
