import React from 'react';
import { Form, Input, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const Snils = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <div className='container_snils' style={{display: "flex", width: "100%"}}>
    <Form name="form_snils_path" style={{display: "flex", flexDirection: "column", width: "35%", margin: "0 auto"}} layout="vertical" onFinish={onFinish}>
      <MyFormItemGroup prefix={['user']}>
        <MyFormItemGroup prefix={['name']}>
          <MyFormItem name="Введите СНИЛС" label="Введите СНИЛС">
            <Input />
          </MyFormItem>
        </MyFormItemGroup>
      </MyFormItemGroup>
      <Button type="primary" htmlType="submit" style={{width: "44%", margin: "0 auto", background: "#F1F5F9", color: "black", fontWeight: "bolder"}}>
        Проверить <RightOutlined />
      </Button>
    </Form>
    </div>
  );
};
export default Snils;