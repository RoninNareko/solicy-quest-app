import { useEffect } from "react";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";

import AccountsTable from "../../components/AccountsPageComponents/AccountsTable";
import findAccountByIdActionCreator from "../../store/actions/findAccountByIdActionCreator";
import { fetchAccounts } from "../../store/effects/fetchAccounts";
import { selectAccounts } from "../../store/selectors/selectAccounts";
import { AppDispatch } from "../../store";

export default function AccountsPage() {
  const accounts = useSelector(selectAccounts);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAccounts());
    return () => {
      dispatch(findAccountByIdActionCreator([]));
    };
  }, [dispatch]);

  return (
    <section>
      {accounts.length ? (
        <AccountsTable accounts={accounts} />
      ) : (
        <Spin size="large" />
      )}
    </section>
  );
}
