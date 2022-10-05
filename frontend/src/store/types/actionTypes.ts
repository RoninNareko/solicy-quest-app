import { getAccountByIdActionType } from '../actions/findAccountByIdActionCreator';
import { getAllUsersActionType } from '../actions/getAllAccountsActionCreator';

export type ActionsTypes = getAllUsersActionType | getAccountByIdActionType;
