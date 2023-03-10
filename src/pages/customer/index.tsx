import React, { useCallback, useState, useEffect } from "react";
import { message, Space } from "antd";
import BasePage from "@/components/base-page";
import type { TablePaginationConfig } from "antd/es/table";
import {
  Customer,
  CustomerReq,
  useGetAllCustomerMutation,
} from "@/api/customer";
import usePaginationKeeper from "@/hooks/usePaginationKeeper";
import SearchHeadr from "./search-header";
import CustomerTable from "./customer-table";
const CustomerPage = () => {
  const [customerList, setCustomerList] = useState<Customer[]>([]);
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });
  const [getAllCustomer, { isLoading, isError }] = useGetAllCustomerMutation();
  const { current, size, input } = usePaginationKeeper();
  useEffect(() => {
    handlePageChange({
      current: current.current,
      size: size.current,
      input: input.current,
    });
  }, []);
  const handlePageChange = useCallback(
    async (data: CustomerReq) => {
      try {
        const payload = await getAllCustomer(data).unwrap();
        setCustomerList(payload.records);
        setPagination({
          current: payload.current,
          pageSize: payload.size,
          total: payload.total,
          showQuickJumper: true,
          showSizeChanger: true,
          showTotal: (total) => {
            return <Space>总共有{total}条数据</Space>;
          },
        });
      } catch (error: any) {
        message.error(error.message);
      }
    },
    [getAllCustomer]
  );

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

    handlePageChange({
      current: current.current,
      size: size.current,
      input: input.current,
    });
  };

  return (
    <BasePage>
      <Space direction="vertical" size={[0, 40]}>
        <SearchHeadr
          isError={isError}
          onChange={handleValuesChange}
          initialValues={input.current}
        />

        <CustomerTable
          pagination={pagination}
          onChange={handleValuesChange}
          data={customerList}
          isLoading={isLoading}
        />
      </Space>
    </BasePage>
  );
};

export default CustomerPage;
