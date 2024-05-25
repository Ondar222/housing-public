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

      <div className="addBlocks">
        <div className="addBlocks__container">
          <div>
            <a href="http://government.ru/">
              <img src="./public/img/pravitelstvo.svg" alt="Правительсво РФ" />
            </a>
          </div>
          <div>
            <a href="https://minstroyrf.gov.ru/">
              <img src="./public/img/minstroi.svg" alt="Минстрой РФ" />
            </a>
          </div>
          <div>
            <a href="https://rtyva.ru/">
              <img
                src="./public/img/pravitelstvoRt.svg"
                alt="Правительство РТ"
              />
            </a>
          </div>
          <div>
            <a href="https://minstroy.rtyva.ru/">
              <img src="./public/img/minstroiRt.svg" alt="Минстрой РТ" />
            </a>
          </div>
          <div>
            <a href="https://www.mkyzyl.ru/">
              <img src="./public/img/meriaKz.svg" alt="Мэрия Кызыл" />
            </a>
          </div>
          <div>
            <a href="https://mkyzyl.ru/about/stroi/">
              <img
                src="./public/img/kapstroiKz.svg"
                alt="Департамент капитального строительства Кызыла "
              />
            </a>
          </div>
        </div>
      <Button className="button_Vk" type="primary">
        <a href="https://vk.com/mkyzyl_100"> Сообщество Вк</a>
      </Button>
      </div>
    </div>
  </div>
);
export default AddInformationBlock;
