import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Spin } from "antd";

import InfoTable from "../../components/AccountInfoPageComponents/InfoTable";
import getAllUsersActionCreator from "../../store/actions/getAllAccountsActionCreator";

import { fetchAccountByID } from "../../store/effects/fetchAccountByID";

import { selectAccounts } from "../../store/selectors/selectAccounts";
import { AppDispatch } from "../../store";

export default function AccountsPage() {
  const accounts = useSelector(selectAccounts);
  const dispatch = useDispatch<AppDispatch>();

  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchAccountByID(id));
    return () => {
      dispatch(getAllUsersActionCreator([]));
    };
  }, [dispatch, id]);

  return (
    <section>
      {accounts.length ? (
        <InfoTable accounts={accounts} />
      ) : (
        <Spin size="large" />
      )}
    </section>
  );
}
