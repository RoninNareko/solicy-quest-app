import { getAccountByIdActionType } from '../actions/findAccountByIdActionCreator';
import { getAllAccountsActionType } from '../actions/getAllAccountsActionCreator';

export type ActionsTypes = getAllAccountsActionType | getAccountByIdActionType;
