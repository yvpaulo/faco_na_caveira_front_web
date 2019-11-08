import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
// import history from '~/services/history';
import api from '~/services/api';
import { getTurmaSuccess } from './actions';

export function* getTurmas() {
  try {
    const response = yield call(api.get, 'turmas');

    // const { turmas } = response.data;
    const data = response.data.map(turma => ({
      ...turma,
    }));
    yield put(getTurmaSuccess(data));

    // history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na requisição');
    // yield put(signFailure());
  }
}

export default all([
  takeLatest('@turma/GET_TURMA_REQUEST', getTurmas),
  // takeLatest('@turma/GET_TURMA_SUCCESS', getTurmas),
]);
