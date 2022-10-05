import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountsTable from "../../components/AccountsPageComponents/AccountsTable";
import findAccountByIdActionCreator from "../../store/actions/findAccountByIdActionCreator";
import { fetchAccounts } from "../../store/effects/fetchAccounts";
import { selectAccounts } from "../../store/selectors/selectAccounts";

export default function AccountsPage() {
  const accounts = useSelector(selectAccounts);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(fetchAccounts());
    return () => {
      dispatch(findAccountByIdActionCreator([]));
    };
  }, [dispatch]);

  return (
    <section>
      {accounts.length ? <AccountsTable accounts={accounts} /> : "Loading..."}
    </section>
  );
}
