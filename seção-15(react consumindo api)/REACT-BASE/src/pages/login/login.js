import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/globalStyles';
import * as exempleActions from '../../store/module/exemple/actions';

export default function login() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(exempleActions.clicaBotaoRequest());
  };
  return (
    <Container>
      <h1>Login</h1>
      <button onClick={handleClick}>enviar</button>
    </Container>
  );
}
