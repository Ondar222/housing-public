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
            <img src="./public/img/pravitelstvo.svg" alt="" />
          </div>
          <div >
            <img src="./public/img/minstroi.svg" alt="" />
          </div>
          <div >
            <img src="./public/img/pravitelstvoRt.svg" alt="" />
          </div>
          <div >
            <img src="./public/img/minstroiRt.svg" alt="" />
          </div>
          <div >
            <img src="./public/img/meriaKz.svg" alt="" />
          </div>
          <div >
            <img src="./public/img/kapstroiKz.svg" alt="" />
          </div>
        </div>
      </div>
      <Button className="button_Vk" type="primary">
        Сообщество Вк
      </Button>
    </div>
  </div>
);
export default AddInformationBlock;
