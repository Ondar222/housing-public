import { Button, Image, Modal, Typography } from "antd";
import React, { useState } from "react";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import Snils from "../SnilsComponent/Snils";

const TurnBlock = () => {
  const [isOpen, setIsOpen] = useState(false)
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

            <Button className="button_queue_class" type="primary" onClick={() => {
              setIsOpen(true)
            }}>
              Узнать
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

        <Modal open={isOpen} onCancel={() => setIsOpen(false)}>
          <Snils />
        </Modal>
      </Row>
    </div>
  );
};

export default TurnBlock;
