import { SmileOutlined } from "@ant-design/icons";

export type LocalMenuType = {
  key: string;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  path?: string | string[];
  parentmenuid?: string;
  level: number;
  children?: LocalMenuType[];
  menucode: string;
  hidden?: boolean;
};

const menu: LocalMenuType[] = [
  {
    key: "1",
    menucode: "CUSTOMER_MANAGEMENT",
    icon: <SmileOutlined />,
    label: "客户管理",
    level: 1,
    children: [
      {
        key: "8",
        menucode: "CUSTOMER_LIST",
        icon: <SmileOutlined />,
        label: "客户列表",
        parentmenuid: "1",
        level: 2,
        path: "/home/customerManagement",
      },
    ],
  },
];

export default menu;
