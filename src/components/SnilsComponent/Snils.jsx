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
  const [open, setOpen] = React.useState(false)
  return (
    <div className='container_snils' style={{ display: "flex", width: "100%" }}>
      <Form name="form_snils_path" style={{ display: "flex", flexDirection: "column", width: "35%", margin: "0 auto" }} layout="vertical" onFinish={onFinish}>
        <MyFormItemGroup prefix={['user']}>
          <MyFormItemGroup prefix={['name']}>
            <MyFormItem name="Введите СНИЛС" label="Введите СНИЛС">
              <Input />
            </MyFormItem>
          </MyFormItemGroup>
        </MyFormItemGroup>
        <Button onClick={() => setOpen(true)} type="primary" htmlType="submit" style={{ width: "44%", margin: "0 auto", background: "#F1F5F9", color: "black", fontWeight: "bolder" }}>
          Проверить <RightOutlined />

        </Button>
        {
          open && (
            <div className="overlay_inn">
              <div className="modal_inn">
                <div>
                <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                  <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                </svg>
                <h4 style={{ textAlign: "left", fontWeight: "bold" }}>Номер вашей очереди</h4>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "20px" }}>
                  <h3>ИНН (номер) - XX XXX XXX</h3>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%"}}>
                <Button type="default" onClick={() => setOpen(false)}>
                    Скачать документ
                  </Button>
                  <div style={{display: "flex"}}>
                  <Button type="default" onClick={() => setOpen(false)}>
                    Отмена
                  </Button>
                  <Button type="primary">
                    Войти
                  </Button>
                  </div>
                </div>
              </div>


            </div>

          )
        }
      </Form>
    </div>
  );
};
export default Snils;
