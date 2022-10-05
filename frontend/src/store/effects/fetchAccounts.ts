import { RootState } from './../index';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux'
import AccountsService from '../../services/accountsService';
import getAllAccountsActionCreator from '../actions/getAllAccountsActionCreator';


type Effect = ThunkAction<any, RootState, any, AnyAction>;

export const fetchAccounts = (): Effect => (dispatch, getState) => {
  
  const accountsService = new AccountsService();
  return accountsService.loadUsers()
    .then((response) => {
      const res = response.data;
      return dispatch(getAllAccountsActionCreator(res))
    });
};