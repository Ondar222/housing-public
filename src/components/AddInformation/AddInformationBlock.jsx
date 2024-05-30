import React from "react";
import { Button, Card } from "antd";

const AddInformationBlock = () => (
  <div>
    <div className="container_addInfo">
      <div className="titleBlock_addInfo">
        <h1>Полезные ссылки</h1>
        <p>
          Ссылки на сайты и электронные системы связанные с жилищными
          программами
        </p>
      </div>

      <Button className="button_Vk" type="primary">
        <a href="https://vk.com/mkyzyl_100"> Сообщество Вк</a>
      </Button>

      <div className="addBlocks">
        <div className="addBlocks__container">
          <div className="banner__container">
            <a href="http://government.ru/">
              <img src="img/pravitelstvo.svg" alt="Правительсво РФ"/>
            </a>
          </div>
          <div className="banner__container">
            <a href="https://minstroyrf.gov.ru/">
              <img src="img/minstroi.svg" alt="Минстрой РФ" />
            </a>
          </div>
          <div className="banner__container">
            <a href="https://rtyva.ru/">
              <img
                src="img/pravitelstvoRt.svg"
                alt="Правительство РТ"
              />
            </a>
          </div>
          <div className="banner__container">
            <a href="https://minstroy.rtyva.ru/">
              <img src="img/minstroiRt.svg" alt="Минстрой РТ" />
            </a>
          </div>
          <div className="banner__container">
            <a href="https://www.mkyzyl.ru/">
              <img src="img/meriaKz.svg" alt="Мэрия Кызыл" />
            </a>
          </div>
          <div className="banner__container">
            <a href="https://mkyzyl.ru/about/stroi/">
              <img
                src="img/kapstroiKz.svg"
                alt="Департамент капитального строительства Кызыла "
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
);
export default AddInformationBlock;
