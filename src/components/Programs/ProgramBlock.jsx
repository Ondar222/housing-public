import React from "react";
import { Button, Card, Col, Row } from 'antd';
const ProgramBlock = () => {
    return (
        <div className="container_programs" >
            <div className="first_block_programs">
                <h1 className="title_programs">Жилищные программы</h1>
                <p className="paragraph_programs">Краткое описание всех жилищных программ мэрии города Кызыл</p>
            </div>
            <div className="second_block_programs">
                <div className="card__federal">
                    <Card className="Card_programs_block" bordered={true}>
                        <h5>
                            <img src="/img/federal-icon.svg" alt="" />
                            Федеральная
                        </h5>
                        <h3>Льготная ипотека для IT-специалистов</h3>
                        <p>Льготная ипотека для специалистов IT-компаний по ставке до 5% годовых</p>
                    </Card>
                </div>
                <div className="card__federal">
                    <Card className="Card_programs_block" bordered={true}>
                        <h5>
                            <img src="/img/federal-icon.svg" alt="" />
                            Федеральная
                        </h5>
                        <h3>Льготная ипотека для IT-специалистов</h3>
                        <p>Льготная ипотека для специалистов IT-компаний по ставке до 5% годовых</p>
                    </Card>
                </div>
                <div className="card__federal">
                    <Card className="Card_programs_block" bordered={true}>
                        <h5>
                            <img src="/img/federal-icon.svg" alt="" />
                            Федеральная
                        </h5>
                        <h3>Льготная ипотека для IT-специалистов</h3>
                        <p>Льготная ипотека для специалистов IT-компаний по ставке до 5% годовых</p>
                    </Card>
                </div>
            </div>

            <Row className="programs__term" style={{ marginTop: "20px" }}>

                <Card className="programs__term__card" style={{ background: "#F1F2F4" }} bordered={false}>
                    <div className="div__term">
                        <div className="term__consultation__class">
                            <h3>Подача до</h3>
                            <p>31.01.2025</p>
                            <Button type="primary" style={{ background: "#4FB1FF" }}>
                                Консультация
                            </Button>
                        </div>
                        <div>
                            <h3>Действует до</h3>
                            <p>31.01.2025</p>
                            <Button type="default">
                                О программе
                            </Button>
                        </div>
                    </div>
                </Card>

                <div>
                    <Card className="programs__term__card" style={{ background: "#F1F2F4" }} bordered={false}>
                        <div className="div__term">

                            <div className="term__consultation__class">
                                <h3>Подача до</h3>
                                <p>31.01.2025</p>
                                <Button type="primary" style={{ background: "#4FB1FF" }}>
                                    Консультация
                                </Button>
                            </div>
                            <div>
                                <h3>Действует до</h3>
                                <p>31.01.2025</p>
                                <Button type="default">
                                    О программе
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card className="programs__term__card" style={{ background: "#F1F2F4" }} bordered={false}>
                        <div className="div__term">

                            <div className="term__consultation__class">
                                <h3>Подача до</h3>
                                <p>31.01.2025</p>
                                <Button type="primary" style={{ background: "#4FB1FF" }}>
                                    Консультация
                                </Button>
                            </div>
                            <div>
                                <h3>Действует до</h3>
                                <p>31.01.2025</p>
                                <Button type="default">
                                    О программе
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </Row>

        </div>

    )
}

export default ProgramBlock;








{/* <Row gutter={18} className="second_table_programs" style={{gap: "30px"}}>
                <Col span={7} style={{ display: "flex", flexDirection: "row" }}>
                    <div className="Card_programs_block" style={{width: "100%", background: "#F1F2F4",}} bordered={false} >
                        <h3>Подача до</h3>
                        <p>31.01.2025</p>
                        <Button type="primary">
                            Консультация
                        </Button>
                    </div>
                    <Card className="Card_programs_block" bordered={false}>
                        <h3>Действует до </h3>
                        <p>31.01.2025</p>
                        <Button>
                            О программе
                        </Button>
                    </Card>
                </Col>
                <Col span={8} style={{ display: "flex", flexDirection: 'row' }}>
                    <Card className="Card_programs_block" style={{width: "100%"}} bordered={false}>
                        <h3>Подача до</h3>
                        <p>31.01.2025</p>
                        <Button type="primary">
                            Консультация
                        </Button>
                    </Card>
                    <Card className="Card_programs_block" bordered={false}>
                        <h3>Действует до </h3>
                        <p>31.01.2025</p>
                        <Button>
                            О программе
                        </Button>
                    </Card>
                </Col>
                <Col span={7} style={{ display: "flex", flexDirection: "row" }}>
                    <Card className="Card_programs_block" style={{width: "100%"}} bordered={false}>
                        <h3>Подача до</h3>
                        <p>31.01.2025</p>
                        <Button type="primary">
                           Консультация
                        </Button>
                    </Card>
                    <Card className="Card_programs_block" bordered={false}>
                        <h3>Действует до </h3>
                        <p>31.01.2025</p>
                        <Button>
                           О программе
                        </Button>
                    </Card>
                </Col>
            </Row> */}