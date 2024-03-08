import React from "react"
import { Col, Row } from "antd";
import { TwitterOutlined, FacebookOutlined, LinkedinOutlined } from "@ant-design/icons";

const Footer = () => {
    return (<div style={{
        backgroundColor: "#252B42",
        // position: "absolute",
       
        // bottom: "0",
        textAlign: "center",
        width: "99%",
        fontSize: "19px",
        fontWeight: "bold",
        color: "#fafaff; "

        // position: absolute;
        // left: 0;
        // bottom: 0;
        // width: 100%;
        // height: 80px;

    }}>
        <div style={{}} >
            <div className="first_block_container" style={{ padding: "20px 20px" }}>
                <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={6}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <h2 style={{ color: "#fff" }}>Pages</h2>
                            <a style={{ color: "#fff" }} href="/">Home</a>
                            <a style={{ color: "#fff" }} href="/">Product</a>
                            <a style={{ color: "#fff" }} href="/">Pricing</a>
                            <a style={{ color: "#fff" }} href="/">About</a>
                            <a style={{ color: "#fff" }} href="/">Contact</a>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <h2 style={{ color: "#fff" }}>Tomothy</h2>
                            <a style={{ color: "#fff" }} href="/"> Eleanor Edwards</a>
                            <a style={{ color: "#fff" }} href="/">Ted Robertson</a>
                            <a style={{ color: "#fff" }} href="/">Annette Russell</a>
                            <a style={{ color: "#fff" }} href="/">Jennie Mckinney</a>
                            <a style={{ color: "#fff" }} href="/">Gloria Richards</a>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <h2 style={{ color: "#fff" }}>Jane Black</h2>
                            <a style={{ color: "#fff" }} href="/">  Philip Jones</a>
                            <a style={{ color: "#fff" }} href="/">Product</a>
                            <a style={{ color: "#fff" }} href="/">Colleen Russell</a>
                            <a style={{ color: "#fff" }} href="/">Marvin Hawkins</a>
                            <a style={{ color: "#fff" }} href="/">Bruce Simmmons</a>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div style={{float: "left"}}>
                            <div>
                                <img src="./public/img/location-icon.svg" width={46} height={46} />
                                <a> 7480 Mockingbird Hill undefined</a>
                            </div>

                            <div>
                            <img src="./public/img/mobile-icon.svg" width={46} height={46} />
                                <a href=""> (239) 555-0108</a>
                            </div>

                           <div>
                            <a href="/">
                            <TwitterOutlined style={{color: "white"}}/>
                            </a>
                            <a href="/">
                            <FacebookOutlined style={{color: "white"}}/>
                            </a>
                            <a href="">
                            <LinkedinOutlined style={{color: "white"}} />
                            </a>
                           </div>
                        </div>
                    </Col>

                </Row>
            </div>
          
        </div>
    </div>
    )
}

export default Footer






{/* <div style={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center" }}>
                            <a style={{ color: "#fff", display: "block", justifyContent: "row", alignItems: "center" }} href="/"> 
                            <img src="./public/img/location-icon.svg" width={46} height={46} />
                                7480 Mockingbird Hill undefined
                            </a>
                            <a style={{ color: "#fff", float: "left" }} href="/"> 
                            <img src="./public/img/mobile-icon.svg" width={46} height={46} />
                                (239) 555-0108
                            </a>
                            <div className="messeng_logo">
                                <a style={{ color: "#fff" }} href="/">
                                    <TwitterOutlined style={{ color: "white" }} />
                                </a>
                                <a href="/">
                                    <FacebookOutlined style={{ color: "white" }} />
                                </a>
                                <a href="/">
                                    <LinkedinOutlined style={{ color: "white" }} />
                                </a>
                            </div>

                        </div>







// import React from "react";
// import { Col, Row } from "antd";
// import { TwitterOutlined, FacebookOutlined, LinkedinOutlined } from "@ant-design/icons";


// const Footer = () => {

//     return (
//         <div className="Footer" style={{ background: "#252B42", position: "relative", bottom: "0",left: "0", padding: "20px 20px" }}>
//             <div className="Footer_container" style={{width: "85%", display: "block", justifyContent: "center"}}>
//                 <div className="first_block_container" style={{padding: "20px 20px"}}>
//                     <Row gutter={[16, 24]}>
//                         <Col className="gutter-row" span={6}>
//                             <div style={{display: "flex", flexDirection: "column"}}>
//                                 <h1 style={{color: "#fff"}}>Pages</h1>
//                                 <a style={{color: "#fff"}} href="/">Home</a>
//                                 <a style={{color: "#fff"}} href="/">Product</a>
//                                 <a style={{color: "#fff"}} href="/">Pricing</a>
//                                 <a style={{color: "#fff"}} href="/">About</a>
//                                 <a style={{color: "#fff"}} href="/">Contact</a>
//                             </div>
//                         </Col>
//                         <Col className="gutter-row" span={6}>
//                             <div style={{display: "flex", flexDirection: "column"}}>
//                                 <h1 style={{color: "#fff"}}>Tomothy</h1>
//                                 <a  style={{color: "#fff"}}href="/"> Eleanor Edwards</a>
//                                 <a style={{color: "#fff"}} href="/">Ted Robertson</a>
//                                 <a style={{color: "#fff"}} href="/">Annette Russell</a>
//                                 <a style={{color: "#fff"}} href="/">Jennie Mckinney</a>
//                                 <a style={{color: "#fff"}} href="/">Gloria Richards</a>
//                             </div>
//                         </Col>
//                         <Col className="gutter-row" span={6}>
//                             <div style={{display: "flex", flexDirection: "column"}}>
//                                 <h1 style={{color: "#fff"}}>Jane Black</h1>
//                                 <a style={{color: "#fff"}} href="/">  Philip Jones</a>
//                                 <a style={{color: "#fff"}} href="/">Product</a>
//                                 <a style={{color: "#fff"}} href="/">Colleen Russell</a>
//                                 <a style={{color: "#fff"}} href="/">Marvin Hawkins</a>
//                                 <a style={{color: "#fff"}} href="/">Bruce Simmmons</a>
//                             </div>
//                         </Col>
//                         <Col className="gutter-row" span={6} >
//                             <div style={{display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center"}}>
//                                 <a style={{color: "#fff"}} href="/"> <img src="./public/img/location-icon.svg" />
//                                     7480 Mockingbird Hill undefined
//                                 </a>

//                                 <a style={{color: "#fff"}} href="/"> <img src="./public/img/mobile-icon.svg" />
//                                     (239) 555-0108
//                                 </a>
//                                 <div className="messeng_logo">
//                                     <a style={{color: "#fff"}} href="/">

//                                         <TwitterOutlined style={{color: "white"}}/>

//                                     </a>
//                                     <a href="/">
//                                         <FacebookOutlined style={{color: "white"}}/>
//                                     </a>
//                                     <a href="/">
//                                         <LinkedinOutlined style={{color: "white"}} />
//                                     </a>
//                                 </div>

//                             </div>
//                         </Col>
//                     </Row>
//                 </div>
//                 <div className="second_block_container">

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer;






{/* <h1>Pages</h1>
                    <a href="/">Home</a>
                    <a href="/">Product</a>
                    <a href="/">Pricing</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a> */}



//     <div>
//     <a href="/"><TwitterOutlined /></a>
//     <a href="/">
//         <FacebookOutlined />
//     </a>
//     <a href="/">
//         <LinkedinOutlined />
//     </a>
// </div>