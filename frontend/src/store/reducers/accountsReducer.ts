
import { GET_ACCOUNTS_BY_ID } from "../actions/findAccountByIdActionCreator";
import { GET_ALL_ACCOUNTS } from "../actions/getAllAccountsActionCreator";
import { AccountsDataType } from "../types/accountsTypes";
import { ActionsTypes } from "../types/actionTypes";


const initialState: AccountsDataType[] = [];


const accountsReducer = function (state = initialState, action:ActionsTypes) :AccountsDataType[] {
  switch (action.type) {
    case GET_ALL_ACCOUNTS: {
      const users = action.value;
      return users
    }
    case GET_ACCOUNTS_BY_ID: {
      const user = action.value;
      return user
    }
    default:{
      return state
    }
  }
};

export default accountsReducer;
