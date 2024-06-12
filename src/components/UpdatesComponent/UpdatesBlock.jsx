import React, { useState } from "react";
import { Row, Card, Col, Button, Input, message } from "antd";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser'; // Импортируем библиотеку emailjs

const UpdatesBlock = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    if (!email) {
      message.error('Пожалуйста, введите ваш email!');
      return;
    }

    // Используем emailjs для отправки письма
    try {
      const result = await emailjs.send(
        'service_hbyop9f', // Замените 'ваш_сервисный_id' на ваш сервисный ID
        'template_55g344d', // Замените 'ваш_шаблон_id' на ваш шаблон
        { email }, // Передаем только email в значения
        'ваш_публичный_ключ' // Замените 'ваш_публичный_ключ' на ваш ключ
      );
      console.log(result.text);
      message.success('Вы успешно подписались на рассылку!');
      setEmail(''); // Очищаем поле ввода
    } catch (error) {
      console.error('Ошибка при отправке письма:', error);
      message.error('Произошла ошибка при отправке. Попробуйте позже.');
    }
  };

  return (
    <Row justify={"space-between"} wrap={false} className="updates">
      <Col xs={{span: 0}} sm={{span: 0}} md={{span: 12}}
      >
        <img
          className="updates__img"
          src="/img/updates-bg.png"
        />
      </Col>
      <Col xs={{span: 24}} sm={{span: 24}} md={{span: 8}}>
        <div className="updates__col">
          <Card className="updates__card" bordered={false}>
            <div className="updates__card__div">
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                Как быть в курсе?
              </p>
              <h3
                className="updates__card__div__h3"
                style={{ fontSize: "36px", width: "80%" }}
              >
                Подписаться на обновления{" "}
              </h3>
            </div>
            <div>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                Подпишитесь на электронную рассылку
              </p>
              <p style={{ fontSize: "20px" }}>Мы отправим вам необходимые ссылки и документы</p>
            </div>
            <div className="updates__btn__container">
              <Input
                className="updates__input"
                placeholder="Ваш e-mail"
                variant="filled"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button className="updates__btn" type="primary" onClick={handleSubmit}>
                Узнать
              </Button>
            </div>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default UpdatesBlock;