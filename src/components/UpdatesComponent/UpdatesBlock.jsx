import React from "react";
import { Row, Card, Col, Button, Input } from "antd";
import { Link } from "react-router-dom";

const UpdatesBlock = () => {
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
              />
              <Button className="updates__btn" type="primary">
                <Link to="/">Узнать</Link>
              </Button>
            </div>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default UpdatesBlock;
