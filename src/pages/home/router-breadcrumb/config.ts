export const breadcrumbNameMap: Record<
  string,
  { name: string; isLeaf?: boolean }
> = {
  "/home/paymentManagement": { name: "支付管理" },
  "/home/paymentManagement/create": { name: "新增支付", isLeaf: true },
  "/home/paymentManagement/detail": { name: "支付详情", isLeaf: true },
  "/home/movieInfoManagement": { name: "电影信息管理" },
  "/home/movieInfoManagement/create": { name: "新增电影信息", isLeaf: true },
  "/home/movieInfoManagement/detail": { name: "电影信息详情", isLeaf: true },
  "/home/movieRemarkManagement": { name: "电影留言管理" },
  "/home/movieRemarkManagement/create": { name: "新增电影留言", isLeaf: true },
  "/home/movieRemarkManagement/detail": { name: "电影留言详情", isLeaf: true },
  "/home/staffManagement": { name: "员工管理" },
  "/home/staffManagement/create": { name: "新建员工" },
  "/home/staffManagement/edit": { name: "编辑员工", isLeaf: true },
  "/home/customerManagement": { name: "用户信息管理" },
  "/home/customerManagement/create": { name: "新增用户信息", isLeaf: true },
  "/home/customerManagement/edit": { name: "编辑用户信息", isLeaf: true },
  "/home/orderManagement": { name: "订单管理" },
  "/home/orderManagement/create": { name: "新增订单", isLeaf: true },
  "/home/orderManagement/detail": { name: "订单详情", isLeaf: true },
};
