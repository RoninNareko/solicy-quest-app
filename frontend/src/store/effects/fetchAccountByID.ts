import { RootState } from './../index';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux'
import AccountsService from '../../services/accountsService';
import findUserByIdActionCreator from '../actions/findAccountByIdActionCreator';


type Effect = ThunkAction<any, RootState, any, AnyAction>;

export const fetchAccountByID = (accountID:string | undefined): Effect => (dispatch) => {
  
  const accountsService = new AccountsService();
  return accountsService.findAccountByID(accountID)
  .then((response) => {
    const res = response.data;
    
    return dispatch(findUserByIdActionCreator(res))
  }).catch(err=> console.log(err));
};