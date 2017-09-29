import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducer';
// import { withRouter } from 'react-router-dom';

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

export default store;
