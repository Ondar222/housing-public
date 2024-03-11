import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';



const Mortgage = () => {
    return (
        <Row gutter={24} style={{ marginTop: "50px" }}>
            <Col span={8}>
                <Card style={{ width: "100%", height: "100%" }} bordered={false}>
                    <div style={{ display: "flex", flexDirection: "row", gap: "10px", background: "#4FB1FF", paddingLeft: "20px" }}>
                        <CheckOutlined /> <p>Действующая программа</p>
                    </div>


                    <div style={{ display: "flex", marginTop: "20px" }}>
                        <div style={{ width: "200px", height: "200px", margin: "0 auto", border: "1px #4FB1FF solid" }}>
                            <p style={{ textAlign: "center", marginTop: "50px" }}>Стоковое изображение
                                размер 200х200</p>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col span={8}>
                <Card style={{ height: "100%" }} bordered={false}>
                    <div>
                        <h3>Льготная ипотека</h3>
                        <p>Предоставление льготной ипотеки по ставке 8% на весь срок кредитования при покупке жилья на первичном рынке недвижимости.</p>
                    </div>
                </Card>
            </Col>
            <Col span={8}>
                <Card bordered={false}>
                    <h4>Регионы: все</h4>
                    <div>
                        <h4>Начало программы:</h4>
                        <p>01.01.2025</p>
                        <h4>Действует до:</h4>
                        <p>01.01.2025</p>
                        <h4>Подача документов до:</h4>
                        <p>01.01.2025</p>
                    </div>
                    <Link className='button' to={"/contacts"} >
                        <Button type="primary" ghost onClick={() => setOpen(true)}>

                            Получить консультацию
                        </Button>
                    </Link>


                </Card>
            </Col>
        </Row>
    )
};
export default Mortgage;