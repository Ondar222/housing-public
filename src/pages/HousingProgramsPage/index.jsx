import React from "react";
import { Button, Card, Col, Row } from 'antd';

const HousingProgramsPage = () => {
    return (
        <div className="container_programs" >
            <div className="first_block_programs">
                <h1 className="title_programs">Жилищные программы</h1>
                <p className="paragraph_programs">Краткое описание всех жилищных программ мэрии города Кызыл</p>
            </div>
            <Row className="second_block_programs" gutter={16}>
                <Col span={8}>
                    <Card className="Card_programs_block"  bordered={true}>
                        <h5 style={{display: "flex", flexDirection: "row", gap: "10px"}}>
                            <img src="./public/img/federal-icon.svg" alt="" />
                            Федеральная
                        </h5>
                        <h3>Льготная ипотека для IT-специалистов</h3>
                        <p>Льготная ипотека для специалистов IT-компаний по ставке до 5% годовых</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="Card_programs_block" bordered={true}>
                    <h5 style={{display: "flex", flexDirection: "row", gap: "10px"}}>
                            <img src="./public/img/federal-icon.svg" alt="" />
                            Федеральная
                        </h5>
                        <h3>Льготная ипотека для IT-специалистов</h3>
                        <p>Льготная ипотека для специалистов IT-компаний по ставке до 5% годовых</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="Card_programs_block" bordered={true}>
                    <h5 style={{display: "flex", flexDirection: "row", gap: "10px"}}>
                            <img src="./public/img/federal-icon.svg" alt="" />
                            Федеральная
                        </h5>
                        <h3>Льготная ипотека для IT-специалистов</h3>
                        <p>Льготная ипотека для специалистов IT-компаний по ставке до 5% годовых</p>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16} className="second_table_programs">
                <Col span={8} style={{ display: "flex", flexDirection: "row" }}>
                    <Card className="Card_programs_block" style={{width: "100%", background: "#F1F2F4"}} bordered={false} >
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
                <Col span={8} style={{ display: "flex", flexDirection: "row" }}>
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
            </Row>
        </div>

    )
}

export default HousingProgramsPage;