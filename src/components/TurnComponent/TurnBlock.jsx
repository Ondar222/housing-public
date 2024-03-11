import { Button, Image, Typography } from "antd";
import React from "react";
import { Card, Col, Row } from 'antd';

const TurnBlock = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", width: "95%", marginTop: "20px", justifyContent: "center" }}>
            <Row style={{ display: "flex", justifyContent: "space-between" }} gutter={16}>
                <Col span={14}>
                    <Card bordered={false}>
                        <Typography.Title level={1} >Узнать свою очередь</Typography.Title>
                        <Typography.Paragraph style={{ fontSize: "28px" }}>Выполните несколько простых шагов:</Typography.Paragraph>
                        <Typography.Paragraph style={{ fontSize: "28px" }}>1. Перейти во вкладку "Моя очередь"</Typography.Paragraph>
                        <Typography.Paragraph style={{ fontSize: "28px" }}>2. Введите свои ФИО (СНИЛС)</Typography.Paragraph>
                        <Typography.Paragraph style={{ fontSize: "28px" }}>3. В новом окне будет результат поиска</Typography.Paragraph>

                        <Button type="primary" style={{ width: "236px", height: "60px", borderRadius: "50px" }}>
                            Узнать
                        </Button>
                    </Card>
                </Col>
                <Col span={10} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

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