import React from "react";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { AccountsDataType } from "../../store/types/accountsTypes";

interface IProps {
  accounts: AccountsDataType[] | [];
}

const columns: ColumnsType<AccountsDataType> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner",
  },
  {
    title: "Created On",
    dataIndex: "createdOn",
    key: "createdOn",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => {
      return (
        <Space size="middle">
          <Link to={`/accounts/${record["id"]}`}>View</Link>
        </Space>
      );
    },
  },
];

const AccountsTable: React.FC<IProps> = ({ accounts }) => {
  return (
    <Table
      columns={columns}
      pagination={false}
      showSorterTooltip={false}
      dataSource={accounts}
    />
  );
};

export default AccountsTable;
