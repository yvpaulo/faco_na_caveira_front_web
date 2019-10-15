import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { validateCpf } from '~/config/validateCpf';

import logo from '~/assets/images/logo_foco_caveira.png';
// import { Container } from './styles';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Mínimo 6 caracteres')
    .required('A senha é obrigatória'),
  name: Yup.string().required('O nome é obrigatório'),
  userName: Yup.string().required('O nome de usuário é obrigatório'),
  nascimento: Yup.string().required('A data de nascimento é obrigatória'),
  cpf: Yup.string()
    .required('O CPF é obrigatório')
    .max(14, 'Confira o CPF')
    .test('cpf-validation', 'Confira o número do CPF', value =>
      validateCpf(value)
    ),
});

export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password, userName, cpf, nascimento }) {
    dispatch(signUpRequest(name, email, password, userName, cpf, nascimento));
  }
  return (
    <>
      <img src={logo} alt="Foco na Caveira" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="name"
          type="name"
          placeholder="Informe seu nome completo"
        />
        <Input
          name="userName"
          type="userName"
          placeholder="Informe nome de usuário no site"
        />
        <Input
          name="nascimento"
          type="nascimento"
          placeholder="Sua data de nascimento"
        />
        <Input
          name="cpf"
          type="cpf"
          placeholder="Seu CPF (Informe somente os números)"
        />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho Login</Link>
      </Form>
    </>
  );
}
