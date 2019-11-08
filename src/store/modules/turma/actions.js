// faz a requisição dos dados da api
export function getTurmaRequest() {
  return {
    type: '@turma/GET_TURMA_REQUEST',
  };
}

export function getTurmaSuccess(turmas) {
  return {
    type: '@turma/GET_TURMA_SUCCESS',
    payload: { turmas },
  };
}
