import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Dropdown, Modal, MenuProps } from "antd";
import {
  DownOutlined,
  EditOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ICON_AVATAR from "./images/avatar.png";
import styles from "./index.module.less";

type Props = {
  className?: string;
};

const UserButton: React.FC<Props> = (props) => {
  const { className } = props;
  const navigate = useNavigate();

  const handleLogout = () => {
    Modal.confirm({
      title: "温馨提示",
      content: "确定要退出登陆吗?",
      cancelText: "取消",
      okText: "确定",
      okType: "primary",
      onOk: async () => {
        navigate("/login");
      },
    });
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div>
          <UserOutlined /> <span>个人资料</span>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div>
          <EditOutlined /> <span>修改密码</span>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div onClick={handleLogout}>
          <LogoutOutlined /> <span>退出登录</span>
        </div>
      ),
    },
  ];
  return (
    <div className={styles.container}>
      <Dropdown
        className={`${styles.dropdown} ${className}`}
        menu={{ items }}
        placement="bottom"
        arrow
        trigger={["click"]}
      >
        <div className={styles.button}>
          <Avatar size={25} src={ICON_AVATAR} />
          <span className={styles.name}>紫皮大蒜</span>
          <DownOutlined />
        </div>
      </Dropdown>
      {/* <Modal
        title="个人信息"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          layout="horizontal"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 17 }}
        >
          <Form.Item label="头像">
            <Avatar
              className={styles.avatar}
              size={30}
              src={avatar?.trim() !== "" && avatar ? avatar : ICON_AVATAR}
            />
            <Upload
              name="file"
              accept=".jpg, .png"
              action={process.env.BASE_URL + "/erp/staff/modify/avatar"}
              headers={{ token: token, "x-user-agent": "WEB" }}
              showUploadList={false}
              maxCount={1}
              onChange={handleFileChange}
            >
              <Button className={styles.changeButton} type="link">
                更换
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item label="姓名">
            <Input disabled bordered={false} type="text" defaultValue={name} />
          </Form.Item>
          <Form.Item label="手机号">
            <Input disabled bordered={false} type="text" defaultValue={tel} />
          </Form.Item>
          <Form.Item label="工号">
            <Input
              disabled
              bordered={false}
              type="text"
              defaultValue={employeeNo}
            />
          </Form.Item>
          <Form.Item label="具备权限">
            <Input
              disabled
              bordered={false}
              type="text"
              defaultValue={currentRoles?.map((res) => res.title).toString()}
            />
          </Form.Item>
        </Form>
      </Modal>
      <Modal title="个人信息" open={flagModal} footer={null}>
        <Form
          layout="horizontal"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 15 }}
          onFinish={handleChangePassword}
        >
          <Form.Item label="手机号">
            {hidePhoneFourNum(String(tel))}
            {!isSend ? (
              <Button
                className={styles.marginButton}
                type="primary"
                onClick={sendTelCode}
              >
                发送验证码
              </Button>
            ) : (
              <Countdown
                className={styles.count}
                valueStyle={{
                  fontSize: "13px",
                  lineHeight: "30px",
                  color: "white",
                }}
                value={time}
                onFinish={() => setIsSend(false)}
                format="s"
              />
            )}
          </Form.Item>
          <Form.Item
            label="验证码"
            name="code"
            rules={[{ required: true, message: "请输入验证码" }]}
          >
            <Input
              type={"text"}
              onChange={handleCode}
              value={code.current}
              placeholder="请输入验证码"
            />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                message: "请输入正确的密码格式",
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z]{8,20}$/,
              },
              { required: true, message: "请输入密码" },
            ]}
          >
            <Input
              type={"text"}
              placeholder="请输入密码"
              onChange={handlePassowrd}
              value={password.current}
            />
          </Form.Item>
          <Input
            type={"text"}
            value="密码长度8-20位，须包含大写字母、小写字母和数字3种元素。"
            disabled
          />
          <Space direction="horizontal" className={styles.passwordButton}>
            <Button htmlType="button" onClick={() => setFlagModal(false)}>
              取消
            </Button>
            <Button htmlType="submit" type="primary">
              确定
            </Button>
          </Space>
        </Form>
      </Modal> */}
    </div>
  );
};

export default React.memo(UserButton);
