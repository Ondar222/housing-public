import React from "react";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";

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
        <Link to="https://vk.com/mkyzyl_100"> Сообщество Вк</Link>
      </Button>

      <div className="addBlocks">
        <div className="addBlocks__container">
          <div className="banner__container">
            <Link to="http://government.ru/">
              <img src="img/pravitelstvo.svg" alt="Правительсво РФ"/>
            </Link>
          </div>
          <div className="banner__container">
            <Link to="https://minstroyrf.gov.ru/">
              <img src="img/minstroi.svg" alt="Минстрой РФ" />
            </Link>
          </div>
          <div className="banner__container">
            <Link to="https://rtyva.ru/">
              <img
                src="img/pravitelstvoRt.svg"
                alt="Правительство РТ"
              />
            </Link>
          </div>
          <div className="banner__container">
            <Link to="https://minstroy.rtyva.ru/">
              <img src="img/minstroiRt.svg" alt="Минстрой РТ" />
            </Link>
          </div>
          <div className="banner__container">
            <Link to="https://www.mkyzyl.ru/">
              <img src="img/meriaKz.svg" alt="Мэрия Кызыл" />
            </Link>
          </div>
          <div className="banner__container">
            <Link to="https://mkyzyl.ru/about/stroi/">
              <img
                src="img/kapstroiKz.svg"
                alt="Департамент капитального строительства Кызыла "
              />
            </Link>
          </div>
        </div>

      </div>
    </div>
  </div>
);
export default AddInformationBlock;
