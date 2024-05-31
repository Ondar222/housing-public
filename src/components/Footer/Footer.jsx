import { Col, Row, Flex } from "antd";
import React from "react"
import { Link } from "react-router-dom";

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
                                <img src="/img/location-icon.svg" height={30} />
                            </Col>
                            <Col>
                                <Link className="footer_location_text" href="/"> г. Кызыл, ул. Бухтуева 3</Link>
                            </Col>
                        </Row>
                        <Row align={"middle"} gutter={[16, 16]}>
                            <Col>
                                <img src="/img/mobile-icon.svg" height={30} />
                            </Col>
                            <Col>
                                <Link className="footer_mobile_text" href="/"> (239) 555-0108</Link>
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































// import React from "react"
// import { Col, Row } from "antd";
// import { TwitterOutlined, FacebookOutlined, LinkedinOutlined } from "@ant-design/icons";

// const Footer = () => {
//     return (<div className="footer">
//         <div className="container_footer">
//             <Row gutter={[16, 24]}>
//                 <Col className="gutter-row" span={5}>
//                     <div className="text_class_footer">
//                         <h2>Pages</h2>
//                         <Link to="/">Home</Link>
//                         <Link to="/">Product</Link>
//                         <Link to="/">Pricing</Link>
//                         <Link to="/">About</Link>
//                         <Link to="/">Contact</Link>
//                     </div>
//                 </Col>
//                 <Col className="gutter-row" span={5}>
//                     <div className="text_class_footer" >
//                         <h2>Tomothy</h2>
//                         <Link to="/"> Eleanor Edwards</Link>
//                         <Link to="/">Ted Robertson</Link>
//                         <Link to="/">Annette Russell</Link>
//                         <Link to="/">Jennie Mckinney</Link>
//                         <Link to="/">Gloria Richards</Link>
//                     </div>
//                 </Col>
//                 <Col className="gutter-row" span={5}>
//                     <div className="text_class_footer">
//                         <h2 >Jane Black</h2>
//                         <Link to="/">  Philip Jones</Link>
//                         <Link to="/">Product</Link>
//                         <Link to="/">Colleen Russell</Link>
//                         <Link to="/">Marvin Hawkins</Link>
//                         <Link to="/">Bruce Simmmons</Link>
//                     </div>
//                 </Col>
//                 <Col span={9}>
//                     <div className="first_block_footer">
//                         <div className="location_class">
//                             <img src="/img/location-icon.svg" width={46} height={46} />
//                             <Link to="/"> 7480 Mockingbird Hill undefined</Link>
//                         </div>

//                         <div className="phone_class">
//                             <img src="/img/mobile-icon.svg" width={46} height={46} />
//                             <Link to="/"> (239) 555-0108</Link>
//                         </div>

//                         <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>

//                         </div>
//                     </div>
//                 </Col>



//             </Row>
//         </div>

//     </div>

//     )
// }

// export default Footer;