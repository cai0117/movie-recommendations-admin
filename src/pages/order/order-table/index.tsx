import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space, Table } from "antd";
import type { TablePaginationConfig, ColumnsType } from "antd/es/table";

type Props = {
  pagination: TablePaginationConfig;

  onChange: (values: {
    pagination: Partial<{ tCurrent: number; tSize: number }>;
  }) => void;
};
const OrderTable: React.FC<Props> = (props) => {
  const { pagination, onChange } = props;
  const navigate = useNavigate();

  const handleTableChange = async (pagination: TablePaginationConfig) => {
    onChange({
      pagination: { tCurrent: pagination.current, tSize: pagination.pageSize },
    });
  };
  // const columns: ColumnsType<> = [
  //   {
  //     title: "姓名",
  //     dataIndex: "fullName",
  //     width: "15%",
  //     align: "center",
  //   },
  //   {
  //     title: "手机号",
  //     width: "15%",
  //     dataIndex: "tel",
  //     align: "center",
  //   },
  //   {
  //     title: "昵称",
  //     width: "15%",
  //     dataIndex: "nickname",
  //     align: "center",
  //   },
  //   {
  //     title: "注册时间",
  //     width: "15%",
  //     dataIndex: "createTime",
  //     align: "center",
  //   },
  //   {
  //     title: "录入方式",
  //     width: "15%",
  //     dataIndex: "registerWay",
  //     render: (value) => {
  //       if (value === 1) return "自主注册";
  //       if (value === 2) return "手工录入";
  //     },
  //     align: "center",
  //   },
  //   {
  //     title: "推荐人",
  //     dataIndex: "recommendName",
  //     width: "15%",
  //     align: "center",
  //   },
  //   {
  //     title: "操作",
  //     width: "10%",
  //     render: (_: string, { id, tel }) => (
  //       <Space size="small">

  //           <Button
  //             type="primary"
  //             ghost

  //           >
  //             编辑
  //           </Button>

  //         <Button
  //           type="primary"
  //           ghost

  //         >
  //           开单
  //         </Button>
  //       </Space>
  //     ),
  //     align: "center",
  //   },
  // ];
  return (
    <Table bordered pagination={pagination} onChange={handleTableChange} />
  );
};

export default React.memo(OrderTable);
