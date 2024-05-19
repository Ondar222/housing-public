import React from "react";
import { Button, Flex } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { Image } from "antd";

const HousingProgramsBlocks = () => {
  return (
    <div
      className="housiung_programs_container"
      style={{ background: "white" }}
    >
      <div className="housiung_programs_info_block">
        <div className="programs_info_block_title_block">
          <div className="programs_buttons_container">
            <h1 style={{ fontWeight: "bold" }}>
              Информационная система по жилищным программам
            </h1>
          </div>
          <h4>
            Описание информационной программы и призыв к действию (например
            призыв подать заявку)
          </h4>

          <Flex className="programs_flex_application" S>
            <Button
              className="programs_button_application"
              href="/programs"
              type="primary"
              icon={ <CheckOutlined />}
            >
              <a className="btn__application__text" href="/programs">
                  
              Подать заявку
              </a>
           
            </Button>
            <Button className="programs_button_queue_application" href="/queue">
             <a className="btn__queue__text" href="/queue">
                Моя очередь
             </a>
            
            </Button>
          </Flex>
        </div>
      </div>
      <div className="programs_img_class">
        <Image src="/img/main-backround.png" preview={false} />
      </div>
    </div>
  );
};

export default HousingProgramsBlocks;
