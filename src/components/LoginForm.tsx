import React, { FC, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import useUserStore from "../hooks/zustand/useUserStore";
import useModalStore from "../hooks/zustand/userModalStore";
import { useNavigate } from "react-router-dom";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const setUserState = useUserStore((state) => state.setUserToken);
  const { setModalState } = useModalStore((state) => state);

  const onFinish = async (values: any): Promise<void> => {
    try {
      setIsSubmitting(true);
      setIsError(false);
      // email : eve.holt@reqres.in
      const response = await (
        await fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        })
      ).json();

      if (response.error) throw new Error("Wrong email/password.");

      setUserState(response.token);
      setModalState(false);
      navigate("/user");
    } catch (e: unknown) {
      if (e instanceof Error) {
        setIsError(true);
        onFinishFailed(e.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      {...formItemLayout}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: false }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        hasFeedback
        validateStatus={isSubmitting ? "validating" : isError ? "error" : ""}
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input allowClear />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        hasFeedback
        validateStatus={isSubmitting ? "validating" : isError ? "error" : ""}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password allowClear />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          xs: { offset: 6, span: 16 },
          sm: { offset: 8, span: 16 },
        }}
      >
        <div className="flex gap-4">
          <Button
            type="primary"
            onClick={() => setModalState(false)}
            style={{ background: "#ffce07" }}
            disabled={isSubmitting ? true : false}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            style={{ background: "#ffce07" }}
            disabled={isSubmitting ? true : false}
          >
            Submit
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
