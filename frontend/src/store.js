import {createStore} from 'redux';
import  {clibraryReducer} from './reducers';

export default createStore(clibraryReducer);