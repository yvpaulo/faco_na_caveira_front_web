import produce from 'immer';

const INITIAL_STATE = {
  turmas: null,
};

export default function turma(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      /* case '@turma/GET_TURMA_REQUEST': {
        break;
      } */
      case '@turma/GET_TURMA_SUCCESS': {
        draft.turmas = action.payload.turmas;
        break;
      }
      default:
    }
  });
}
