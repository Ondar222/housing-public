import { Button, Image, Typography } from "antd";
import React from "react";
import { Card, Col, Row } from 'antd';

const TurnBlock = () => {
    return (
        <div className="queue_class">
            <Row className="container_queue_class">
                <div span={14}>
                    <Card className="queue_class__card" bordered={false}>
                        <Typography.Title className="queue_class__title" level={1} >Узнать свою очередь</Typography.Title>
                        <Typography.Paragraph className="queue__class__text">Выполните несколько простых шагов:</Typography.Paragraph>
                        <Typography.Paragraph className="queue__class__text">1. Перейти во вкладку "Моя очередь"</Typography.Paragraph>
                        <Typography.Paragraph className="queue__class__text">2. Введите свои ФИО (СНИЛС)</Typography.Paragraph>
                        <Typography.Paragraph className="queue__class__text">3. В новом окне будет результат поиска</Typography.Paragraph>

                        <Button className="button_queue_class" type="primary">
                            Узнать
                        </Button>
                    </Card>
                </div>
                <Col className="img_queue_class" span={10}>
                    <Image
                    className="img__queue__img"
                        preview={false}
                      
                        src="/img/macbook.png"
                    />
                </Col>
            </Row>
        </div>

    )
}

export default TurnBlock;