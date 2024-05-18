import React from "react";
import { Form, Input, Button } from "antd";
import { Card } from "antd";
import MapComponents from "../MapComponents/MapComponents";

const ContactsBlock = () => {
  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <div className="Container_contactsBlock">
      <Card className="card__contact">
        <h1>Напишите нам</h1>
        <Form className="Form_contactsBlock" onFinish={onFinish}>
          <Input placeholder="Фамилия Имя Отчество" />

          <Input placeholder="Ваш email" />

          <Input style={{ height: "150px" }} placeholder="Ваше обращение" />

          <Button
            type="primary"
            htmlType="submit"
            className="Form_contactsBlock_Button"
          >
            Отправить
          </Button>
        </Form>
      </Card>

      <MapComponents />
    </div>
  );
};

export default ContactsBlock;
