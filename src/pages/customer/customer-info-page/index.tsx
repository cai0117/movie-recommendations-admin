import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Select,
  Space,
  Divider,
  Radio,
  DatePicker,
  Affix,
  Cascader,
  message,
  Image,
} from "antd";
import type { DefaultOptionType } from "antd/lib/cascader";
import BasePage from "@/components/base-page";
import { useAppSelector } from "@/redux/hooks";
import ICON_AVATAR from "../../home/user-button/images/avatar.png";
import styles from "./index.module.less";

const CustomerInfoPage: React.FC = () => {
  const { id } = useParams();
  const isEditing = !!id;
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const navigate = useNavigate();
  //推荐人列表
  const goBack = () => {
    navigate(-1);
  };

  // const handleFinish = async (value: any) => {
  //   setIsSubLoading(true);
  //   try {
  //     if (isEditing) {
  //       await updateCustomer(
  //         Object.assign({}, customerData, value, {
  //           cityRegionId: value.area
  //             ? isNaN(Number(value.area[1]))
  //               ? customerData?.cityRegionId
  //               : value.area[1]
  //             : undefined,
  //           provinceRegionId: value.area
  //             ? isNaN(Number(value.area[0]))
  //               ? customerData?.cityRegionId
  //               : value.area[0]
  //             : undefined,
  //           birthday: value.birthday ? value.birthday.valueOf() : undefined,
  //         })
  //       ).unwrap();
  //     } else {
  //       await createCustomer(
  //         Object.assign({}, value, {
  //           cityRegionId: value.area ? value.area[1] : undefined,
  //           provinceRegionId: value.area ? value.area[0] : undefined,
  //           salesStaffId: employeeId.current,
  //           birthday: value.birthday ? value.birthday.valueOf() : undefined,
  //         })
  //       ).unwrap();
  //     }
  //     message.success("保存成功");
  //     navigate(-1);
  //   } catch (error: any) {
  //     setIsSubLoading(false);
  //     message.error(error.message);
  //   }
  // };

  return (
    <BasePage>
      <Form
        name="CustomerInfo"
        form={form}
        autoComplete="off"
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 8 }}
      >
        <Divider orientation="left">基本信息</Divider>
        {isEditing && (
          <Form.Item label="头像">
            <Image
              width={50}
              height={50}
              src={ICON_AVATAR}
              fallback={ICON_AVATAR}
            />
          </Form.Item>
        )}

        <Form.Item
          label="姓名"
          name="fullName"
          rules={[{ required: true, max: 20 }]}
        >
          <Input placeholder="请输入员工姓名" />
        </Form.Item>

        {isEditing && (
          <Form.Item label="昵称" name="nickname">
            <Input disabled />
          </Form.Item>
        )}

        <Form.Item label="性别" name="gender">
          <Radio.Group>
            <Radio value={0}>男</Radio>
            <Radio value={1}>女</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="微信号" name="wechatNumber">
          <Input placeholder="请输入微信号" />
        </Form.Item>

        <Form.Item label="生日" name="birthday">
          <DatePicker
            allowClear
            format={"YYYY/MM/DD"}
            className={styles.datePicker}
            showToday={false}
          />
        </Form.Item>

        <Form.Item label="备注" name="remark" rules={[{ max: 200 }]}>
          <TextArea placeholder="请输入备注信息，200字以内" rows={5} />
        </Form.Item>
        <Affix offsetBottom={24}>
          <div className={styles.bottom}>
            <Space>
              <Button htmlType="button" onClick={goBack}>
                取消
              </Button>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
            </Space>
          </div>
        </Affix>
      </Form>
    </BasePage>
  );
};

export default React.memo(CustomerInfoPage);
