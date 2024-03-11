import React from "react";
import { Button, Flex } from 'antd';
import { CheckOutlined } from "@ant-design/icons";
import { Image } from 'antd';
import ProgramBlock from "../Programs/ProgramBlock";

const HousingProgramsBlocks = () => {
    return (
        <div className="housiung_programs_container" style={{  background: "white" }}>
            <div className="housiung_programs_info_block" style={{ margin: "0 auto", background: "white", width: "80%", paddingTop: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", textAlign: "center", gap: "20px" }}>
                    <div style={{ width: "500px", height: "104px", margin: "0 auto", textAlign: "center" }}>

                        <h1 style={{fontWeight: "bold"}}>Информационная система по
                            жилищным программам
                        </h1>
                    </div>
                    <h4 style={{ color: "#D9D9D9", fontSize: "15px", height: "100%", fontWeight: "normal" }}>
                        Описание информационной программы и призыв к действию (например призыв подать заявку)
                    </h4>



                    <Flex style={{ display: "flex", flexDirection: "row", margin: "0 auto", width: "576px", height: "109px" }} gap="small" wrap="wrap">
                        <Button href="/programs" style={{ background: "#34C759", marginRight: "20px", width: "263px", height: "76px", fontWeight: "bold", paddingTop: "25px" }} type="primary" icon={<CheckOutlined />}>
                            Подать заявку
                        </Button>
                        <Button href="/turn" style={{ width: "263px", height: "76px", paddingTop: "25px", fontWeight: "bold" }}>Моя очередь</Button>
                    </Flex>


                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Image 
                    // width={1178}
                    // height={450}
                    src="./public/img/main-backround.png"
                    preview={false}
                />
            </div>
        
        </div>
    )
}

export default HousingProgramsBlocks;