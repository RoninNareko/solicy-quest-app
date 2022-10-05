import { AccountsDataType } from './../store/types/accountsTypes';

class AccountsService {
   async loadUsers ():Promise<AccountsDataType[]> {
        return  await new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve([{
                id: "1",
                name: "John Brown",
                createdOn: "2015",
                owner: "kek",
              }, {
                id: "1",
                name: "John Brown",
                createdOn: "2015",
                owner: "kek",
              },{
                id: "1",
                name: "John Brown",
                createdOn: "2015",
                owner: "kek",
                
              }]);
            }, 300);
          });
    }
    async findAccountByID ():Promise<AccountsDataType[]> {
        return  await new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve([{
                id: "1000",
                name: "John Brown",
                createdOn: "2015",
                owner: "kek",
                updatedOn:"456456"
              }]);
            }, 300);
          });
    }
}

export default AccountsService; 