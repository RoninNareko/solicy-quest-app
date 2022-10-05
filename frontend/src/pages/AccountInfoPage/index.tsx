import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfoTable from "../../components/AccountInfoPageComponents/InfoTable";
import getAllUsersActionCreator from "../../store/actions/getAllAccountsActionCreator";
import { fetchAccountByID } from "../../store/effects/fetchAccountByID";

import { selectAccounts } from "../../store/selectors/selectAccounts";

export default function AccountsPage() {
  const accounts = useSelector(selectAccounts);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchAccountByID());
    return () => {
      dispatch(getAllUsersActionCreator([]));
    };
  }, [dispatch]);

  return (
    <section>
      {accounts.length ? <InfoTable accounts={accounts} /> : "Loading..."}
    </section>
  );
}
