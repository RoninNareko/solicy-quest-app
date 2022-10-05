import { Descriptions } from "antd";
import React from "react";
import { AccountsDataType } from "../../store/types/accountsTypes";

interface IProps {
  accounts: AccountsDataType[] | [];
}
const InfoTable: React.FC<IProps> = ({ accounts }) => {
  const accountData = accounts[0];
  return (
    <section>
      <Descriptions layout="vertical" bordered>
        <Descriptions.Item>
          <b>ID</b>
        </Descriptions.Item>
        <Descriptions.Item>{accountData.id}</Descriptions.Item>
      </Descriptions>
      <Descriptions layout="vertical" bordered>
        <Descriptions.Item>
          <b>Name</b>
        </Descriptions.Item>
        <Descriptions.Item>{accountData.name}</Descriptions.Item>
      </Descriptions>
      <Descriptions layout="vertical" bordered>
        <Descriptions.Item>
          <b>Owner</b>
        </Descriptions.Item>
        <Descriptions.Item>{accountData.owner}</Descriptions.Item>
      </Descriptions>
      <Descriptions layout="vertical" bordered>
        <Descriptions.Item>
          <b>Created On</b>
        </Descriptions.Item>
        <Descriptions.Item>{accountData.createdOn}</Descriptions.Item>
      </Descriptions>
      <Descriptions layout="vertical" bordered>
        <Descriptions.Item>
          <b>Updated On</b>
        </Descriptions.Item>
        <Descriptions.Item>{accountData.updatedOn}</Descriptions.Item>
      </Descriptions>
    </section>
  );
};

export default InfoTable;
