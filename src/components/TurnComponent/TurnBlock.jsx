import { Button, Image, Typography } from "antd";
import React from "react";
import { Card, Col, Row } from "antd";

const TurnBlock = () => {
  return (
    <div className="queue_class">
      <Row className="container_queue_class">
        <div>
          <Card className="queue_class__card" bordered={false}>
            <div className="queue_class__title">Узнать свою очередь</div>
            <p className="queue__class__text">
              Выполните несколько простых шагов:
            </p>
            <p className="queue__class__text">
              1. Перейти во вкладку "Моя очередь"
            </p>
            <p className="queue__class__text">2. Введите свои серию и номер паспорта</p>
            <p className="queue__class__text">
              3. В новом окне будет результат поиска
            </p>

            <Button className="button_queue_class" type="primary">
              <a href="#">Узнать</a>
            </Button>
          </Card>
        </div>
        <div className="img_queue_class" >
          <Image
            className="img__queue__img"
            preview={false}
            src="/img/macbook.png"
          />
        </div>
      </Row>
    </div>
  );
};

export default TurnBlock;
