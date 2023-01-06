import {
  SmileOutlined,
  TeamOutlined,
  ShopOutlined,
  VideoCameraAddOutlined,
  WalletOutlined,
  OrderedListOutlined,
  DatabaseOutlined,
  FileWordOutlined,
} from "@ant-design/icons";
// import { ADMIN_ROLE, STORE_MANAGER_ROLE, RoleType } from "@/constants/role";

export type MenuType = {
  key: string;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  path?: string;
  // roles: RoleType[];
};

const menu: MenuType[] = [
  {
    key: "customer",
    icon: <SmileOutlined />,
    label: "用户信息管理",
    path: "/home/customerManagement",
    // roles: [ADMIN_ROLE, STORE_MANAGER_ROLE],
  },
  {
    key: "payment",
    icon: <ShopOutlined />,
    label: "支付管理",
    path: "/home/paymentManagement",
    // roles: [ADMIN_ROLE],
  },
  {
    key: "staff",
    icon: <TeamOutlined />,
    label: "员工管理",
    path: "/home/staffManagement",
    // roles: [ADMIN_ROLE, STORE_MANAGER_ROLE],
  },
  {
    key: "movieInfo",
    icon: <VideoCameraAddOutlined />,
    label: "电影信息管理",
    path: "/home/movieInfoManagement",
    // roles: [ADMIN_ROLE],
  },
  {
    key: "movieRemark",
    icon: <DatabaseOutlined />,
    label: "影片留言管理",
    path: "/home/movieRemarkManagement",
    // roles: [STORE_MANAGER_ROLE],
  },
  {
    key: "order",
    icon: <WalletOutlined />,
    label: "订单管理",
    path: "/home/orderManagement",
    // roles: [ADMIN_ROLE, STORE_MANAGER_ROLE],
  },
];

export default menu;
