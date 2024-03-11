import { Button } from "antd";
import React from "react";
import { Card, Col, Row } from 'antd';

const TurnBlock = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", width: "95%", marginTop: "20px", justifyContent: "center" }}>
            <Row style={{ display: "flex", justifyContent: "space-between" }} gutter={16}>
                <Col span={14}>
                    <Card bordered={false}>
                        <h2 style={{ fontWeight: "normal" }}>Узнать свою очередь</h2>
                        <p style={{fontSize: "28px"}}>Выполните несколько простых шагов:</p>
                        <p style={{fontSize: "28px"}}>1. Перейти во вкладку "Моя очередь"</p>
                        <p style={{fontSize: "28px"}}>2. Введите свои ФИО (СНИЛС)</p>
                        <p style={{fontSize: "28px"}}>3. В новом окне будет результат поиска</p>



                        <Button type="primary" style={{ width: "236px", height: "60px", borderRadius: "50px" }}>
                            Узнать
                        </Button>
                    </Card>
                </Col>
                <Col span={10} style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>

                    <img
                        width={500}
                        height={360}
                        src="./public/img/macbook.png">
                    </img>

                </Col>
            </Row>
        </div>

    )
}

export default TurnBlock;