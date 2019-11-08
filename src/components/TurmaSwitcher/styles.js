import styled from 'styled-components';
import { lighten } from 'polished';

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

  p {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.1, '#ff892e')};
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255, 255, 255, 01);
  }
`;
