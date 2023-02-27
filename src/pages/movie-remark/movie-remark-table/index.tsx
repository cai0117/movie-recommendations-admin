import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Space, Table } from "antd";
import type { TablePaginationConfig, ColumnsType } from "antd/es/table";
import { Movie } from "@/api/movie";

type Props = {
  pagination: TablePaginationConfig;
  data: Movie[];
  isLoading: boolean;
  onChange: (values: {
    pagination: Partial<{ tCurrent: number; tSize: number }>;
  }) => void;
};
const MovieRemarkTable: React.FC<Props> = (props) => {
  const { pagination, onChange, isLoading, data } = props;
  const navigate = useNavigate();

  const handleTableChange = async (pagination: TablePaginationConfig) => {
    onChange({
      pagination: { tCurrent: pagination.current, tSize: pagination.pageSize },
    });
  };
  const columns: ColumnsType<Movie> = [
    {
      title: "电影名称",
      dataIndex: "title",
      align: "center",
    },
    {
      title: "电影评分",
      dataIndex: "rate",
      width: 100,
      align: "center",
    },
    {
      title: "类型",
      dataIndex: "type",
      align: "center",
    },
    {
      title: "留言",
      dataIndex: "hotShortCommend",
      align: "center",
    },
    {
      title: "操作",
      width: "10%",
      render: (_: string) => (
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
      rowKey={(item) => item.movieId}
      dataSource={data}
      columns={columns}
      loading={isLoading}
      pagination={pagination}
      onChange={handleTableChange}
    />
  );
};

export default React.memo(MovieRemarkTable);
