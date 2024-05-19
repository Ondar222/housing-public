import React from "react";
import { Row, Card, Col, Button, Input } from "antd";

const UpdatesBlock = () => {
  return (
    <div className="ubdates">
      <Row className="ubdates__container">
        
       <div className="updates__img__container">
          <img className="ubdates__img" width={610} height={520} src="/img/updates-bg.png"></img>
        </div>

        <div className="ubdates__col">
          <Card className="ubdates__card" bordered={false}>
            <div className="ubdates__card__div">
              <h5 style={{ fontSize: "20px" }}>Как быть в курсе?</h5>
              <h3 className="ubdates__card__div__h3" style={{ width: "352px", fontSize: "48px" }}>
                Подписаться на обновления{" "}
              </h3>
            </div>
            <div>
              <h4>Подпишитесь на электронную рассылку</h4>
              <p>Мы отправим вам необходимые ссылки и документы</p>
            </div>
            <div className="ubdates__btn__container"
            >
              <Input className="ubdates__input"
                placeholder="Ваш e-mail"
                variant="filled"

              />
              <Button className="ubdates__btn"
                type="primary"
              >
                Узнать
              </Button>
            </div>
          </Card>
        </div>
      </Row>
    </div>
  );
};

export default UpdatesBlock;
