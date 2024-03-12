import { Button, Image, Typography } from "antd";
import React from "react";
import { Card, Col, Row } from 'antd';

const TurnBlock = () => {
    return (
        <div className="queue_class">
            <Row className="container_queue_class" gutter={16}>
                <Col span={14}>
                    <Card bordered={false}>
                        <Typography.Title level={1} >Узнать свою очередь</Typography.Title>
                        <Typography.Paragraph style={{ fontSize: "28px" }}>Выполните несколько простых шагов:</Typography.Paragraph>
                        <Typography.Paragraph style={{ fontSize: "28px" }}>1. Перейти во вкладку "Моя очередь"</Typography.Paragraph>
                        <Typography.Paragraph style={{ fontSize: "28px" }}>2. Введите свои ФИО (СНИЛС)</Typography.Paragraph>
                        <Typography.Paragraph style={{ fontSize: "28px" }}>3. В новом окне будет результат поиска</Typography.Paragraph>

                        <Button className="button_queue_class" type="primary">
                            Узнать
                        </Button>
                    </Card>
                </Col>
                <Col className="img_queue_class" span={10}>

                    <Image
                        preview={false}
                        width={624}
                        height={350}

                        src="./public/img/macbook.png"
                    />

                </Col>
            </Row>
        </div>

    )
}

export default TurnBlock;