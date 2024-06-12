import { Col, Row, Flex } from "antd";
import React from "react"
import { Link } from "react-router-dom";
import { EnvironmentOutlined, MobileOutlined, MailOutlined } from "@ant-design/icons";

const Footer = () => {
    return (
        <div className="footer">
            <Row justify={"space-between"} wrap={true}>
                <Col span={8} sm={{
                    span: 24
                }} xs={{
                    span: 24
                }} md={{
                    span: 8
                }}>
                    <Flex vertical gap={20}>
                        <Row align={"middle"} gutter={[16, 16]}>
                            <Col>
                                <img src="/favicon.png" width={70} height={70} />
                            </Col>
                            <Col>
                                <h3>Мэрия города Кызыла</h3>
                            </Col>
                        </Row>
                        <Row align={"middle"} gutter={[16, 16]}>
                            <Col>
                                <EnvironmentOutlined />
                            </Col>
                            <Col>
                                <Link className="footer_location_text" href="/"> г. Кызыл, ул. Бухтуева 3</Link>
                            </Col>
                        </Row>
                        <Row align={"middle"} gutter={[16, 16]}>
                            <Col>
                                <MobileOutlined />
                            </Col>
                            <Col>
                                <a className="footer_mobile_text" href="tel:+73942230305">+7 394 223 38 87
                                </a>
                            </Col>
                        </Row>

                        <Row align={"middle"} gutter={[16, 16]}>
                            <Col>
                                <MailOutlined />
                            </Col>
                            <Col>
                                <a className="footer_mobile_text" href="mailto:dagizo@rtyva.ru">dagizo@rtyva.ru
                                </a>
                            </Col>
                        </Row>
                    </Flex>
                </Col>
                <Col span={8} sm={{
                    span: 24
                }} xs={{
                    span: 24
                }} md={{
                    span: 4
                }}>
                    <Flex vertical gap={20}>
                        <h4>Карта сайта</h4>
                        <Link to="/">Главная</Link>
                        <Link to="/queue">Моя очередь</Link>
                        <Link to="/programs">Программы</Link>
                        <Link to="/resettlements">Переселение</Link>
                        <Link to="/contacts">Контакты</Link>
                    </Flex>
                </Col>
                <Col span={8} sm={{
                    span: 24
                }} xs={{
                    span: 24
                }} md={{
                    span: 4
                }}>
                    <Flex vertical gap={20}>
                        <h4>Жилищные программы</h4>
                        <Link to="/programs">Обеспечение жильем молодых семьей</Link>
                        <Link to="/programs">Переселение из аварийного и ветхого жилья</Link>
                        <Link to="/programs">Улучшение жилищных условий</Link>
                    </Flex>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;