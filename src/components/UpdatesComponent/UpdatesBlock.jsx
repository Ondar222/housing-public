import React from "react";
import { Row, Card, Col, Button, Input } from "antd";

const UpdatesBlock = () => {
  return (
    <div className="ubdates">
      <Row className="ubdates__container">
        <div className="updates__img__container">
          <img
            className="ubdates__img"
            width={610}
            height={520}
            src="/img/updates-bg.png"
          ></img>
        </div>

        <div className="ubdates__col">
          <Card className="ubdates__card" bordered={false}>
            <div className="ubdates__card__div">
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                Как быть в курсе?
              </p>
              <h3
                className="ubdates__card__div__h3"
                style={{ fontSize: "36px", width: "80%" }}
              >
                Подписаться на обновления{" "}
              </h3>
            </div>
            <div>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                Подпишитесь на электронную рассылку
              </p>
              <p style={{ fontSize: "20px"}}>Мы отправим вам необходимые ссылки и документы</p>
            </div>
            <div className="ubdates__btn__container">
              <Input
                className="ubdates__input"
                placeholder="Ваш e-mail"
                variant="filled"
              />
              <Button className="ubdates__btn" type="primary">
                <a href="/">Узнать</a>
              </Button>
            </div>
          </Card>
        </div>
      </Row>
    </div>
  );
};

export default UpdatesBlock;
