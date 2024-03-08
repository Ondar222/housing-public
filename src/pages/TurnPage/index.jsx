import { Button } from "antd";
import React from "react";
import { Card, Col, Row } from 'antd';

const TurnPage = () => {
    return (
        <div style={{height: "1080px"}}>
            <div style={{margin: "0 auto", display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "100px"}}>

            <Row gutter={16} style={{justifyContent: "center"}}>
                <Col span={8}>
                    <Card bordered={false} >
                        <h3>Узнать свою очередь</h3>
                        <p>Выполните несколько простых шагов:
                            Перейти во вкладку "Моя очередь"
                            Введите свои ФИО (СНИЛС)
                            В новом окне будет результат поиска</p>
                        <Button type="primary">
                            Узнать
                        </Button>
                    </Card>
                </Col>
                <Col span={8}>
                
                        <img
                            width={400}
                            height={220}
                            src="./public/img/macbook.png">
                        </img>
                    
                </Col>
            </Row>
            </div>
        </div>

    )
}

export default TurnPage;