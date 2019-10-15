import React, { Component } from 'react';

import { Container, Turma, TurmaList } from './styles';

export default class TurmaSwitcher extends Component {
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
