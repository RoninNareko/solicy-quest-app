import { RootState } from './../index';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux'
import AccountsService from '../../services/accountsService';
import findUserByIdActionCreator from '../actions/findAccountByIdActionCreator';


type Effect = ThunkAction<any, RootState, any, AnyAction>;

export const fetchAccountByID = (): Effect => (dispatch) => {
  
  const accountsService = new AccountsService();
  return accountsService.findAccountByID()
    .then((users) => dispatch(findUserByIdActionCreator(users)));
};