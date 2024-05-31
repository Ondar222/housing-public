import React from "react";
import { EnvironmentOutlined, MobileOutlined, MailOutlined } from "@ant-design/icons";
import { Col, Flex, Row } from "antd";


const MapComponents = () => {
    return (
        <Flex vertical gap={20} style={{
            width: "100%"
        }}>
            <Flex gap={10}>
                <EnvironmentOutlined />
                <a>гор. Кызыл, ул. Бухтуева 3</a>
            </Flex>


            <Flex gap={10}>
                <MobileOutlined />
                <a href="tel:+73942230305">+7 394 223-03-05</a>
            </Flex>


            <Flex gap={10}>
                <MailOutlined />
                <a href="mailto:dagizo@rtyva.ru">dagizo@rtyva.ru</a>
            </Flex>

            <iframe className="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Af32982bf83712a6d5245f0c0232bbe7c617742dfecc3bfc1d5323da550c22e15&amp;source=constructor" width="100%" height="400"></iframe>
        </Flex>);
}

export default MapComponents;