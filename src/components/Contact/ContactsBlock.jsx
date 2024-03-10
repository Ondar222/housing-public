import React from "react";
import { Form, Input, Button } from 'antd';
import { EnvironmentOutlined, MobileOutlined, MailOutlined } from "@ant-design/icons";
import { Card } from "antd";


const ContactsBlock = () => {
    const onFinish = (value) => {
        console.log(value);
    };

    return (
        <div className="Container_contactsBlock">
            <Card className="Card_contactsBlock" >
                <h1 style={{ textAlign: "center" }}>Напишите нам</h1>
                <Form className="Form_contactsBlock" onFinish={onFinish}>
                    <Input placeholder="Your name" />

                    <Input placeholder="Your email" />

                    <Input style={{ height: "150px" }} placeholder="Your Message" />

                    <Button type="primary" htmlType="submit" className="Form_contactsBlock_Button">
                        Отправить
                    </Button>
                </Form>
            </Card>

            <div className="Container_contactsBlock_second">
                <div className="ContactsBlock_second_block">
                    <div className="Location_class">
                        <EnvironmentOutlined classID="Location_logo" style={{justifyContent: "center", color: "#2091F9"}} />
                        <p className="Location_class_paragraph" > Республика Тыва, Кызыл, ул. Бухтуева 3</p>
                    </div>

                    <div className="Phone_class">
                        <MobileOutlined className="Phone_logo" />
                        <p className="Phone_class_paragraph">(843) 555-0130</p>
                    </div>
                    <div className="Email_class">
                        <MailOutlined className="Email_class_logo"  />
                        <p className="Email_class_paragraph">default@mail.ru</p>
                    </div>
                </div>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad153a0ca85b2bf7d06720a69f8a45f52f5619b51eb74a3720804d8a2c50ff3b6&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
            </div>
        </div>

    )
}

export default ContactsBlock;