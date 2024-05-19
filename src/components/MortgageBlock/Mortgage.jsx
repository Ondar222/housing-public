import React from "react";
import { Button, Card, Col, Row } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Mortgage = () => {
  return (
    <Row className="mortgage_class">
      <div className="mortgage_col">
        <Card className="mortgage_class_left_block" bordered={false}>
          <div className="mg_title_left_block">
            <CheckOutlined /> <p>Действующая программа</p>
          </div>

          <div className="mg_img">
            <div className="mg_img_container">
              <p>Стоковое изображение размер 200х200</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="morgage__ipoteka__class">
        <Card className="mortgage__ipoteka" style={{ height: "100%" }} bordered={false}>
          <div>
            <h3>Льготная ипотека</h3>
            <p>
              Предоставление льготной ипотеки по ставке 8% на весь срок
              кредитования при покупке жилья на первичном рынке недвижимости.
            </p>
          </div>
        </Card>
      </div>
      <div>
        <Card className="mortgage__region" bordered={false}>
          <h4>Регионы: все</h4>
          <div>
            <h4>Начало программы:</h4>
            <p>01.01.2025</p>
            <h4>Действует до:</h4>
            <p>01.01.2025</p>
            <h4>Подача документов до:</h4>
            <p>01.01.2025</p>
          </div>
          <Link className="button" to={"/contacts"}>
            <Button type="primary" ghost onClick={() => setOpen(true)}>
              Получить консультацию
            </Button>
          </Link>
        </Card>
      </div>
    </Row>
  );
};
export default Mortgage;
