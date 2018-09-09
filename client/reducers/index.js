import { combineReducers } from 'react';

// importar o reducer raiz
import { rootReducer } from './reducers/posts';

// importar dados iniciais
import posts from './data/posts';
import comments from './data/comments';

const rootReducer = combineReducers({ posts, comments, routing: rootReducer });

export default  rootReducer;