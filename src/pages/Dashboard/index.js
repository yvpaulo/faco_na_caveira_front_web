/* import React from 'react';

// import { Container } from './styles';

export default function Dashboard() {
  return <h1>Dashboard</h1>;
} */

import React from 'react';

import { Container } from './styles';

import TurmaSwitcher from '~/components/TurmaSwitcher';

export default function Dashboard() {
  return (
    <Container>
      <TurmaSwitcher />
    </Container>
  );
}
