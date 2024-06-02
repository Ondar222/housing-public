import React from "react";
import { Button, Flex } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { Link } from "react-router-dom";

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
              Информационная система жилищных государственных программ Мэрии
              г.Кызыл
            </h1>
            <p>
              Уважаемый гость! Рады приветствовать вас в нашей информационной
              системе! Для начала работы с нашей информационной системой
              пожалуйста выберите нужный пункт меню
            </p>
          </div>

          <Flex className="programs_flex_application" S>
            <Button
              className="programs_button_application"
              href="/programs"
              type="primary"
            >
              <div className="checkOutlined_class">
                <CheckOutlined style={{ width: "20px", height: "20px" }} />
              </div>
              <Link className="btn__application__text" to="/programs">
                Подать заявку
              </Link>
            </Button>
            <Button className="programs_button_queue_application" href="/queue">
              <Link className="btn__queue__text" to="/queue">
                Моя очередь
              </Link>
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
