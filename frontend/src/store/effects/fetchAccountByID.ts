import { ActionsTypes } from './../types/actionTypes';
import { ThunkAction } from 'redux-thunk';

import AccountsService from '../../services/accountsService';
import findUserByIdActionCreator from '../actions/findAccountByIdActionCreator';

import { RootState } from './../index';

type Effect = ThunkAction<any, RootState, any, ActionsTypes>;

export const fetchAccountByID = (accountID:string | undefined): Effect => (dispatch) => {
  
  const accountsService = new AccountsService();
  return accountsService.findAccountByID(accountID)
  .then((response) => {
    const res = response.data;
    
    return dispatch(findUserByIdActionCreator(res))
  }).catch(err=> console.log(err));
};