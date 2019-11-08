import React, { Component, useState, useEffect, useMemo } from 'react';

import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTurmaSuccess } from '~/store/modules/turma/actions';
import api from '~/services/api';

import { Container, Turma, TurmaList } from './styles';

export default function TurmaSwitcher() {
  // /assim funciona, mas fica chamado as turmas sem parar
  // const dispatch = useDispatch();
  // {
  // dispatch(getTurmaSuccess());
  // }

  const [turmasdb, setTurmas] = useState([]);

  useEffect(() => {
    async function loadTurmas() {
      const response = await api.get('turmas');

      const data = response.data.map(turma => ({
        ...turma,
      }));

      setTurmas(data);
    }
    loadTurmas();
  }, []);

  return (
    <Container>
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
    </Container>
  );
}

/* const dispatch = useDispatch();
dispatch();
class TurmaSwitcher extends Component {
  //componentDidMount() {
  //  const { getTurmaSuccess } = this.props;
  //  getTurmaSuccess();
 // }

  render() {
    return (
      <Container>
        <TurmaList>
          <Turma>
            <img
              alt="Foco"
              src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=PRF"
            />
          </Turma>
          <Turma>
            <img
              alt="Foco"
              src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=PRF"
            />
          </Turma>
          <Turma>
            <img
              alt="Foco"
              src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=PRF"
            />
          </Turma>
        </TurmaList>
      </Container>
    );
  }
}

export default TurmaSwitcher;

*/
