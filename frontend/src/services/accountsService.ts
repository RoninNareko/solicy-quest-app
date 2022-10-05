import axios from 'axios';
import { AccountsDataType } from './../store/types/accountsTypes';

class AccountsService {
   async loadUsers () {
        return await axios.get<AccountsDataType[]>(`/accounts`);
    }
    async findAccountByID (accountId:string | undefined) {
      return await axios.get<AccountsDataType[]>(`/accounts/${accountId}`);
    }
}

export default AccountsService; 