import { useState, useCallback, ChangeEvent } from "react";
import { Input, Button, Space, message, Statistic, Form } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useAppDispatch } from "@redux/hooks";
import { useNavigate } from "react-router-dom";
import { config as particleConfig } from "./particle.config";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { setRefreshToken, setToken } from "@slices/tokenSlice";
import { setUserInfo } from "@slices/userSlice";
import styles from "./index.module.less";
import { useLoginMutation } from "@/api/userApi";

const LoginPage = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const particlesInit = useCallback(async (engine: any) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const handleLogin = async () => {
    let temp = {
      account: account,
      password: password,
    };

    try {
      const payload = await login(temp).unwrap();
      dispatch(setToken(payload.token));
      dispatch(setRefreshToken(payload.refreshToken));
      dispatch(setUserInfo(payload.data));
      navigate("/home");
    } catch (error: any) {
      message.error(error.message);
    }
  };
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleConfig}
      />
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          <div className={styles.title}>
            <Space size={[40, 0]}>
              <span className={styles.check}>账号登录</span>
            </Space>
          </div>

          <Space direction="vertical" size={0}>
            <Form>
              <Form.Item initialValue={account} name="account">
                <Input
                  size="large"
                  placeholder="请输入账号"
                  type="text"
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                />
              </Form.Item>
            </Form>

            <Input.Password
              size="large"
              placeholder="请输入密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Space>
          <Button type="primary" size="large" onClick={handleLogin}>
            立即登录
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
