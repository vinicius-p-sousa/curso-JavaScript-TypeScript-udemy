import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS:
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      console.log('sucesso :)');
      return newState;

    case types.BOTAO_CLICADO_FAILURE:
      console.log('Erro :(');
      return state;

    case types.BOTAO_CLICADO_REQUEST:
      console.log('fazendo requisições');
      return state;
    default:
      return state;
  }
}
