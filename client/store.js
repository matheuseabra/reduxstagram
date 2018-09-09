import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// importar o reducer raiz
import { rootReducer } from './reducers/posts';

// importar dados iniciais
import posts from './data/posts';
import comments from './data/comments';

// define estado padrão do app
const defaultState = {
    posts,
    comments
};

// cria a Store com o defaultState como estado inicial
const store = createStore(rootReducer, defaultState);

// Mantém o histórico do browser
export const history = syncHistoryWithStore(browserHistory, store);

export default store;