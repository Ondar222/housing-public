import React from "react"
import { Col, Row } from "antd";
import { TwitterOutlined, FacebookOutlined, LinkedinOutlined } from "@ant-design/icons";

const Footer = () => {
    return (<div className="footer">
        <div className="container_footer">
            <Row gutter={[16, 24]}>
                <Col className="gutter-row" span={5}>
                    <div className="text_class_footer">
                        <h2>Pages</h2>
                        <a href="/">Home</a>
                        <a href="/">Product</a>
                        <a href="/">Pricing</a>
                        <a href="/">About</a>
                        <a href="/">Contact</a>
                    </div>
                </Col>
                <Col className="gutter-row" span={5}>
                    <div className="text_class_footer" >
                        <h2>Tomothy</h2>
                        <a href="/"> Eleanor Edwards</a>
                        <a href="/">Ted Robertson</a>
                        <a href="/">Annette Russell</a>
                        <a href="/">Jennie Mckinney</a>
                        <a href="/">Gloria Richards</a>
                    </div>
                </Col>
                <Col className="gutter-row" span={5}>
                    <div className="text_class_footer">
                        <h2 >Jane Black</h2>
                        <a href="/">  Philip Jones</a>
                        <a href="/">Product</a>
                        <a href="/">Colleen Russell</a>
                        <a href="/">Marvin Hawkins</a>
                        <a href="/">Bruce Simmmons</a>
                    </div>
                </Col>
                <Col span={9}>
                    <div className="first_block_footer">
                        <div className="location_class">
                            <img src="./public/img/location-icon.svg" width={46} height={46} />
                            <a href="/"> 7480 Mockingbird Hill undefined</a>
                        </div>

                        <div className="phone_class">
                            <img src="./public/img/mobile-icon.svg" width={46} height={46} />
                            <a href="/"> (239) 555-0108</a>
                        </div>

                        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>


                            {/* <img className="twitter_img" src="./public/img/twitter.png" />
                          
                         
                            <img className="facebook_img" src="./public/img/facebook.png" />
                           
                          
                            <img className="inbox_img" src="./public/img/inbox.png" /> */}

                        </div>
                    </div>
                </Col>



            </Row>
        </div>

    </div>

    )
}

export default Footer;