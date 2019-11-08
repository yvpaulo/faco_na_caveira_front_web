import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Notifications from '~/components/Notifications';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';
import logo from '../../assets/images/logo_foco_caveira_header.png';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  // função para fazer o lougOut
  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Foco na Caveira" />
          </Link>
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="profile">Meu Perfil</Link>
              <button type="button" onClick={handleSignOut}>
                Sair
              </button>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
