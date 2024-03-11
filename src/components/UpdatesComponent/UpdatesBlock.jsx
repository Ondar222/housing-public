import React from "react";
import { Row, Card, Col, Button, Input  } from "antd";



const UpdatesBlock = () => {



    return (
        <div style={{ display: "flex", flexDirection: "row", width: "100%"}}>
            <Row style={{ display: "flex", justifyContent: "space-between" }} gutter={16}>
                <Col span={10}>

                    <img
                        width={610}
                        height={520}
                        src="./public/img/updates-bg.png">
                    </img>

                </Col>

                <Col span={10}>
                    <Card bordered={false} >

                        <div>
                            <h5 style={{ fontSize: "20px" }}>Как быть в курсе?</h5>
                            <h3 style={{ width: "352px", fontSize: "48px" }}>Подписаться
                                на обновления </h3>
                        </div>
                        <div>
                            <h4>Подпишитесь на электронную рассылку</h4>
                            <p>Мы отправим вам необходимые ссылки
                                и документы</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "20px"}}>
                        <Input placeholder="Ваш e-mail" variant="filled" style={{width: "273px", height: "54px", borderRadius: "10px"}} />
                        <Button type="primary" style={{width: "183px", height: "52px", borderRadius: "50px"}}>
                            Узнать
                        </Button>
                        </div>

                    </Card>
                </Col>
            </Row>
        </div>

    )
}

export default UpdatesBlock;





