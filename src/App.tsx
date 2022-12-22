import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import ErrorBoundary from "./components/error-boundary";
import Router from "./router";
import "./App.css";

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </ConfigProvider>
  );
}

export default App;
