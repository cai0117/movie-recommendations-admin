import {
  SmileOutlined,
  TeamOutlined,
  ShopOutlined,
  VideoCameraAddOutlined,
  WalletOutlined,
  TagsOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
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
    key: "customerManagement",
    icon: <SmileOutlined />,
    label: "客户管理",
    path: "/home/customerManagement",
    // roles: [ADMIN_ROLE, STORE_MANAGER_ROLE],
  },
  {
    key: "shop",
    icon: <ShopOutlined />,
    label: "门店管理",
    path: "/home/shop",
    // roles: [ADMIN_ROLE],
  },
  {
    key: "employee",
    icon: <TeamOutlined />,
    label: "员工管理",
    path: "/home/employee",
    // roles: [ADMIN_ROLE, STORE_MANAGER_ROLE],
  },
  {
    key: "scenicSpot",
    icon: <VideoCameraAddOutlined />,
    label: "景点管理",
    path: "/home/scenicSpot",
    // roles: [ADMIN_ROLE],
  },
  // {
  //   key: "combo",
  //   icon: <WalletOutlined />,
  //   label: "套餐管理",
  //   path: "/home/combo",
  //   roles: [ADMIN_ROLE],
  // },
  // {
  //   key: "comboService",
  //   icon: <TagsOutlined />,
  //   label: "服务列表",
  //   path: "/home/comboService",
  //   roles: [ADMIN_ROLE],
  // },
  {
    key: "goods",
    icon: <ShoppingCartOutlined />,
    label: "商品库",
    path: "/home/goods",
    // roles: [ADMIN_ROLE],
  },
  {
    key: "storeGoods",
    icon: <ShoppingOutlined />,
    label: "门店商品",
    path: "/home/storeGoods",
    // roles: [ADMIN_ROLE, STORE_MANAGER_ROLE],
  },
  // {
  //   key: "order",
  //   icon: <OrderedListOutlined />,
  //   label: "订单管理",
  //   path: "/home/order",
  // },
  {
    key: "storeData",
    icon: <DatabaseOutlined />,
    label: "门店资料设置",
    path: "/home/storeData",
    // roles: [STORE_MANAGER_ROLE],
  },
  {
    key: "storeWork",
    icon: <FileWordOutlined />,
    label: "门店作品",
    path: "/home/storeWork",
    // roles: [STORE_MANAGER_ROLE],
  },
  {
    key: "orderManager",
    icon: <WalletOutlined />,
    label: "订单管理",
    path: "/home/orderManager",
    // roles: [ADMIN_ROLE, STORE_MANAGER_ROLE],
  },
];

export default menu;
