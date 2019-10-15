import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    /* if (!user.provider) {
      toast.error('Usuário não é Administrador');
      return;
    } */
    // salva o token  no header através do axios para ser comum a toda a pliacação
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na autenticação');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, userName, cpf, nascimento } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
      userName,
      cpf,
      nascimento,
    });
    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados');
    // return err;

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  // se não tiver nada no payload, não retorna nada
  if (!payload) return;

  // se tiver logado pega o token do usuario
  const { token } = payload.auth;
  // if for um usuario logado, passa o token para o header da aplicação
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYFRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
