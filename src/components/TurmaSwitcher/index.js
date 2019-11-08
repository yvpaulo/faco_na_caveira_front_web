import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { getTurmaRequest } from '~/store/modules/turma/actions';

import { Container, Turma, TurmaList } from './styles';

export default function TurmaSwitcher() {
  const turmasdb = useSelector(state => state.turma.turmas);
  const dispatch = useDispatch();

  useEffect(() => {
    // fiz essa função pq  o disatch fica repetindo eternamente fora daqui, mas não sei se é a melhor forma
    async function loadTurmas() {
      dispatch(getTurmaRequest());
    }
    loadTurmas();
  }, [dispatch]);

  return (
    <Container>
      {!turmasdb.length && (
        <TurmaList>
          <Turma key="0">
            <img
              alt="sem turma"
              src="https://ui-avatars.com/api/?font-size=0.33&length=4&background=7159c1&color=fff&name=00"
            />
            <p>Sem Turma</p>
          </Turma>
        </TurmaList>
      )}
      {turmasdb && (
        <TurmaList>
          {turmasdb.map(turma => (
            <Turma key={turma.id}>
              <img
                alt={turma.titulo}
                src={`https://ui-avatars.com/api/?font-size=0.33&length=4&background=7159c1&color=fff&name=${turma.titulo}`}
              />
              <p>{turma.titulo}</p>
            </Turma>
          ))}
        </TurmaList>
      )}
    </Container>
  );
}
