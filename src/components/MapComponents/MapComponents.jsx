import React, { useState, useEffect } from "react";
import { EnvironmentOutlined, MobileOutlined, MailOutlined } from "@ant-design/icons";
import { Col, Flex, Row, message } from "antd";

const MapComponents = () => {
  const [userLocation, setUserLocation] = useState({ latitude: 51.7002, longitude: 94.4934 }); // Кызыл по умолчанию
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  useEffect(() => {
    const getCurrentPosition = () => {
      setIsGettingLocation(true);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
            setIsGettingLocation(false);
          },
          (error) => {
            console.error("Ошибка определения местоположения:", error);
            message.error("Не удалось получить ваше местоположение.");
            setIsGettingLocation(false);
          }
        );
      } else {
        message.info("Браузер не поддерживает геолокацию.");
        setIsGettingLocation(false);
      }
    };

    getCurrentPosition();
  }, []);

  return (
    <Flex vertical gap={20}
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
      style={{
        width: "100%"
      }}>
      <Flex gap={10}>
        <EnvironmentOutlined />
        <a>гор. Кызыл, ул. Бухтуева 3</a>
      </Flex>

      <Flex gap={10}>
        <MobileOutlined />
        <a href="tel:+73942230305">+7 394 223 38 87</a>
      </Flex>

      <Flex gap={10}>
        <MailOutlined />
        <a href="mailto:dagizo@rtyva.ru">dagizo@rtyva.ru</a>
      </Flex>

      {isGettingLocation ? (
        <div>Определение местоположения...</div>
      ) : (
        <Flex
          span={6}
          xs={{
            span: 24
          }}
          sm={{
            span: 10
          }}
          md={{
            span: 12
          }}>
          <iframe className="map"
            src={`https://yandex.ru/map-widget/v1/?um=constructor%3Af32982bf83712a6d5245f0c0232bbe7c617742dfecc3bfc1d5323da550c22e15&amp;source=constructor&amp;pt=${userLocation.longitude},${userLocation.latitude}`}
            width="100%" height="400"></iframe>
        </Flex>
      )}
    </Flex>
  );
};

export default MapComponents;