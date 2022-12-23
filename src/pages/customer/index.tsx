import React, { useCallback, useState, useEffect } from "react";
import { message, Space } from "antd";
import BasePage from "@/components/base-page";
import type { TablePaginationConfig } from "antd/es/table";
import usePaginationKeeper from "@/hooks/usePaginationKeeper";
import SearchHeadr from "./search-header";
import CustomerTable from "./customer-table";
const CustomerPage: React.FC = () => {
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });
  const { current, size, input } = usePaginationKeeper();

  // const handlePageChange = useCallback(
  //   async (data: CustomerRequest) => {
  //     try {
  //       const payload = await getCustomerList(data).unwrap();
  //       setCustomerList(payload.records);
  //       setPagination({
  //         current: payload.current,
  //         pageSize: payload.size,
  //         total: payload.total,
  //         showQuickJumper: true,
  //         showSizeChanger: true,
  //         showTotal: (total) => {
  //           return <Space>总共有{total}条数据</Space>;
  //         },
  //       });
  //     } catch (error: any) {
  //       message.error(error.message);
  //     }
  //   },
  //   [getCustomerList]
  // );

  const handleValuesChange = (
    values: Partial<{
      opt: Partial<{ registerWay: number; keyword: string }>;
      pagination: Partial<{ tCurrent: number; tSize: number }>;
    }>
  ) => {
    values.pagination?.tCurrent &&
      (current.current = values.pagination?.tCurrent);
    values.pagination?.tSize && (size.current = values.pagination?.tSize);
    values.opt && (input.current = values.opt);

    // handlePageChange({
    //   current: current.current,
    //   size: size.current,
    //   input: input.current,
    // });
  };

  return (
    <BasePage>
      <Space direction="vertical" size={[0, 40]}>
        <SearchHeadr
          onChange={handleValuesChange}
          initialValues={input.current}
        />

        <CustomerTable pagination={pagination} onChange={handleValuesChange} />
      </Space>
    </BasePage>
  );
};

export default CustomerPage;
