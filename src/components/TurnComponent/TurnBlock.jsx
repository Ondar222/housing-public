import { Button } from "antd";
import React from "react";
import { Card, Col, Row } from 'antd';

const TurnBlock = () => {
    return (
            <div style={{display: "flex", flexDirection: "row", width: "100%", marginTop: "20px"}}>
            <Row style={{display: "flex", justifyContent: "space-between"}} gutter={16}>
                <Col span={10}>
                    <Card bordered={false} >
                        <h3>Узнать свою очередь</h3>
                        <p>Выполните несколько простых шагов:
                            Перейти во вкладку "Моя очередь"
                            Введите свои ФИО (СНИЛС)
                            В новом окне будет результат поиска</p>
                        <Button type="primary" style={{width: "236px", height: "60px", borderRadius: "50px"}}>
                            Узнать
                        </Button>
                    </Card>
                </Col>
                <Col span={10}>
                
                        <img
                            width={510}
                            height={220}
                            src="./public/img/macbook.png">
                        </img>
                    
                </Col>
            </Row>
            </div>

    )
}

export default TurnBlock;