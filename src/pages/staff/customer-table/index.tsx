import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space, Table, Tag } from "antd";
import type { TablePaginationConfig, ColumnsType } from "antd/es/table";
import { RoleAuthType } from "@/api/userApi";

type Props = {
  pagination: TablePaginationConfig;
  data: RoleAuthType[];
  isLoading: boolean;
  onChange: (values: {
    pagination: Partial<{ tCurrent: number; tSize: number }>;
  }) => void;
};
const StaffTable: React.FC<Props> = (props) => {
  const { pagination, onChange, isLoading, data } = props;
  const navigate = useNavigate();

  const handleTableChange = async (pagination: TablePaginationConfig) => {
    onChange({
      pagination: { tCurrent: pagination.current, tSize: pagination.pageSize },
    });
  };
  const columns: ColumnsType<RoleAuthType> = [
    {
      title: "员工编号",
      dataIndex: "userId",

      align: "center",
    },
    {
      title: "姓名",
      dataIndex: "name",

      align: "center",
    },
    {
      title: "手机号",

      dataIndex: "tel",
      align: "center",
    },
    {
      title: "状态",
      dataIndex: "status",
      align: "center",
      render: (_, record) =>
        Number(record.status) === 1 ? (
          <Tag color="green" key={record.status}>
            启用
          </Tag>
        ) : (
          <Tag color="red" key={record.status}>
            禁用
          </Tag>
        ),
    },

    {
      title: "操作",
      width: "10%",
      render: (_, record) => (
        <Space size="small">
          <Button type="primary" ghost>
            编辑
          </Button>

          <Button type="primary" ghost>
            开单
          </Button>
        </Space>
      ),
      align: "center",
    },
  ];
  return (
    <Table
      bordered
      pagination={pagination}
      onChange={handleTableChange}
      loading={isLoading}
      rowKey={(item) => item.userId}
      dataSource={data}
      columns={columns}
    />
  );
};

export default React.memo(StaffTable);
