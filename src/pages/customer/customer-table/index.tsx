import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space, Table } from "antd";
import type { TablePaginationConfig, ColumnsType } from "antd/es/table";
import { Customer } from "@/api/customer";

type Props = {
  pagination: TablePaginationConfig;
  data: Customer[];
  isLoading: boolean;
  onChange: (values: {
    pagination: Partial<{ tCurrent: number; tSize: number }>;
  }) => void;
};
const CustomerTable: React.FC<Props> = (props) => {
  const { pagination, onChange, data, isLoading } = props;
  const navigate = useNavigate();

  const handleTableChange = async (pagination: TablePaginationConfig) => {
    onChange({
      pagination: { tCurrent: pagination.current, tSize: pagination.pageSize },
    });
  };
  const columns: ColumnsType<Customer> = [
    {
      title: "手机号",
      dataIndex: "tel",
      align: "center",
    },
    {
      title: "昵称",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "来源",
      dataIndex: "origin",
      align: "center",
    },
    {
      title: "操作",
      width: 100,
      render: (_, record) => (
        <Space size="small">
          <Button type="primary" ghost>
            编辑
          </Button>
        </Space>
      ),
      align: "center",
    },
  ];
  return (
    <Table
      bordered
      rowKey={(item) => item.customerId}
      dataSource={data}
      columns={columns}
      loading={isLoading}
      pagination={pagination}
      onChange={handleTableChange}
    />
  );
};

export default React.memo(CustomerTable);
