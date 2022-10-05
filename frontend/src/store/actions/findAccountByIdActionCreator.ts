import { AccountsDataType } from '../types/accountsTypes';
export const GET_ACCOUNTS_BY_ID = "GET_USER_BY_ID";

export type getAccountByIdActionType = {
  type:string,
  value:AccountsDataType[] | []
}
function findAccountByIdActionCreator(value:AccountsDataType[]):getAccountByIdActionType {
  return {
    type: GET_ACCOUNTS_BY_ID,
    value: value,
  };
}

export default findAccountByIdActionCreator;
