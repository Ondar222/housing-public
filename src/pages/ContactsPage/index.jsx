import React from "react";
// import { Button, Card, Col, Row } from 'antd';
import { Form, Input, Button } from "antd";
import ContactsBlock from "../../components/Contact/ContactsBlock";
import AddInformationBlock from "../../components/AddInformation/AddInformationBlock";
const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};

const ContactsPage = () => {
  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <div className="contact__page">
      <ContactsBlock />
      <AddInformationBlock />
    </div>
  );
};

export default ContactsPage;
