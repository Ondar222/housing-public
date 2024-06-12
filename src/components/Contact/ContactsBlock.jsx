import React from "react";
import { Form, Input, Button, Col, Row } from "antd";
import { Card } from "antd";
import MapComponents from "../MapComponents/MapComponents";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser'; // Импортируем библиотеку emailjs

const ContactsBlock = () => {
  const onFinish = (values) => {
    console.log('Success:', values);

    // Используем emailjs для отправки письма
    emailjs.send(
      'service_hbyop9f', 
      'service_hbyop9f', 
      values, 
      'lPJPI61F2PBea52iP' 
    )
      .then((result) => {
        console.log(result.text);
        // Можно показать пользователю сообщение об успешной отправке
      }, (error) => {
        console.log(error.text);
        // Можно показать пользователю сообщение об ошибке отправки
      });
  };

  return (
    <div className="Container_contactsBlock">
      <Row gutter={[16, 16]} style={{width: "100%"}}>
        <Col 
         span={6}
         xs={{
           span: 24
         }}
         sm={{
           span: 10
         }}
         md={{
           span: 12
         }}
        >
          <Card className="card__contact">
            <h3>Напишите нам</h3>
            <Form className="Form_contactsBlock" onFinish={onFinish}>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Пожалуйста, введите ваше имя!",
                  },
                ]}
              >
                <Input placeholder="Фамилия Имя Отчество" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "Введите правильный email!",
                  },
                  {
                    required: true,
                    message: "Пожалуйста, введите ваш email!",
                  },
                ]}
              >
                <Input placeholder="Ваш email" />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[
                  {
                    required: true,
                    message: "Пожалуйста, введите ваше сообщение!",
                  },
                ]}
              >
                <Input.TextArea style={{ height: "150px" }} placeholder="Ваше обращение" />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                className="Form_contactsBlock_Button"
              >
                Отправить
              </Button>
            </Form>
          </Card>
        </Col>
        <Col     span={6}
         xs={{
           span: 24
         }}
         sm={{
           span: 10
         }}
         md={{
           span: 12
         }}>
          <MapComponents />
        </Col>
      </Row>
    </div>
  );
};

export default ContactsBlock;