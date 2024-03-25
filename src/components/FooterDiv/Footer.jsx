import React from "react"

const Footer = () => {
    return (<div className="footer">
        <div className="container_footer">
            <div className="footer_first_block">
                <div className="footer_logo_class" >
                    <img src="./img/merya-logo.svg" width={100} height={100} />
                    <h3>Мэрия города Кызыла</h3>
                </div>
                <div className="footer_second_block">
                    <div className="footer_location_class">
                    <img src="./img/location-icon.svg" width={45} height={45} />
                    <a href="/"> г. Кызыл, ул. Бухтуева 3</a>
                    </div>
                    <div className="footer_mobile_class">
                    <img src="./img/mobile-icon.svg" width={45} height={45} />
                    <a href="/"> (239) 555-0108</a>
                    </div>
                </div>
            </div>

            <div className="footer_mapsite_class">
                <h3>Карта сайта</h3>
                <a href="/">Главная</a>
                <a href="/queue">Моя очередь</a>
                <a href="/programs">Программы</a>
                <a href="/resettlements">Переселение</a>
                <a href="/contacts">Контакты</a>
            </div>

            <div className="footer_third_block">
                <h3>Жилищные программы</h3>
                <a href="/">Семейная ипотека</a>
                <a href="/">Молодая семья</a>
                <a href="/">Программа №1</a>
                <a href="/">Программа №2е</a>
                <a href="/">Программа №3</a>
            </div>
        </div>
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
//                         <a href="/">Home</a>
//                         <a href="/">Product</a>
//                         <a href="/">Pricing</a>
//                         <a href="/">About</a>
//                         <a href="/">Contact</a>
//                     </div>
//                 </Col>
//                 <Col className="gutter-row" span={5}>
//                     <div className="text_class_footer" >
//                         <h2>Tomothy</h2>
//                         <a href="/"> Eleanor Edwards</a>
//                         <a href="/">Ted Robertson</a>
//                         <a href="/">Annette Russell</a>
//                         <a href="/">Jennie Mckinney</a>
//                         <a href="/">Gloria Richards</a>
//                     </div>
//                 </Col>
//                 <Col className="gutter-row" span={5}>
//                     <div className="text_class_footer">
//                         <h2 >Jane Black</h2>
//                         <a href="/">  Philip Jones</a>
//                         <a href="/">Product</a>
//                         <a href="/">Colleen Russell</a>
//                         <a href="/">Marvin Hawkins</a>
//                         <a href="/">Bruce Simmmons</a>
//                     </div>
//                 </Col>
//                 <Col span={9}>
//                     <div className="first_block_footer">
//                         <div className="location_class">
//                             <img src="./img/location-icon.svg" width={46} height={46} />
//                             <a href="/"> 7480 Mockingbird Hill undefined</a>
//                         </div>

//                         <div className="phone_class">
//                             <img src="./img/mobile-icon.svg" width={46} height={46} />
//                             <a href="/"> (239) 555-0108</a>
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