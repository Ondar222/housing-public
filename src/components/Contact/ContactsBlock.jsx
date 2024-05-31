import React from "react";
import { Form, Input, Button, Col, Row } from "antd";
import { Card } from "antd";
import MapComponents from "../MapComponents/MapComponents";
import { Link } from "react-router-dom";

const ContactsBlock = () => {
  const onFinish = (value) => {
    console.log(value);
  };

  return (

    <div className="Container_contactsBlock">
      <Row gutter={[16, 16]} style={{width: "100%"}}>
        <Col span={12}>
          <Card className="card__contact">
            <h3>Напишите нам</h3>
            <Form className="Form_contactsBlock" onFinish={onFinish}>
              <Input placeholder="Фамилия Имя Отчество" />

              <Input placeholder="Ваш email" />

              <Input style={{ height: "150px" }} placeholder="Ваше обращение" />

              <Button
                type="primary"
                htmlType="submit"
                className="Form_contactsBlock_Button"
              >
                <Link className="contact__btn__href" href="/">
                  Отправить
                </Link>

              </Button>
            </Form>
          </Card>
        </Col>
        <Col span={12}>
          <MapComponents />
        </Col>
      </Row>


    </div>
  );
};

export default ContactsBlock;
