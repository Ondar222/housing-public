import React from "react";
import { Button, Card, Col, Row } from "antd";
const ProgramBlock = () => {
  return (
    <div className="container_programs">
      <div className="first_block_programs">
        <h1 className="title_programs">Жилищные программы</h1>
        <p className="paragraph_programs">
          Мэрией города Кызыл реализуются следующие жилищные государственные
          программы:
        </p>
      </div>
      <div className="second_block_programs">
        <div className="card__federal">
          <Card className="Card_programs_block" bordered={true}>
            <h3>
              <img
                src="/img/federal-icon.svg"
                alt="federal__icon"
                width={25}
                height={25}
              />
              Федеральная
            </h3>
            <h3>Обеспечение жильем молодых семьей</h3>
            <p>
              Государственная поддержка молодых семьей в России не подразумевает
              бесплатного предоставления жилья. Государство оплачивает часть
              стоимости квартиры за семью, а средства предоставляются в виде
              субсидии (то есть деньги государству возвращать не придется).
            </p>
          </Card>
        </div>
        <div className="card__federal">
          <Card className="Card_programs_block" bordered={true}>
            <h3>
              <img
                src="/img/federal-icon.svg"
                alt="federal__icon"
                width={25}
                height={25}
              />
              Федеральная
            </h3>
            <h3>Переселение из аварийного и ветхого жилья</h3>
            <p>
              Расселение аварийного жилья осуществляется в рамках федерального
              проекта «Обеспечение устойчивого сокращения непригодного для
              проживания жилищного фонда» национального проекта «Жилье и
              городская среда»
            </p>
          </Card>
        </div>
        <div className="card__federal">
          <Card className="Card_programs_block" bordered={true}>
            <h3>
              <img
                src="/img/federal-icon.svg"
                alt="federal__icon"
                width={25}
                height={25}
              />
              Федеральная
            </h3>
            <h3>Улучшение жилищных условий</h3>
            <p>
              Как получить квартиру в соцнаем или по договору безвозмездного
              пользования. Кому предоставляются жилищные субсидии и социальная
              ипотека. Как получить квартиру инвалидам и семьям с больными
              тяжелыми хроническими заболеваниями
            </p>
          </Card>
        </div>
      </div>

      <div className="programs__term" style={{ marginTop: "20px" }}>
        <div
          className="programs__term__card"
          style={{ background: "#F1F2F4" }}
          bordered={false}
        >
          <div className="div__term">
            <div className="term__consultation__class">
              <h3>Подача до</h3>
              <p>31.01.2025</p>
              <Button className="term__button" type="primary">
                <a href="#">Консультация</a>
              </Button>
            </div>
            <div className="supple">
              <h3>Действует до</h3>
              <p>31.01.2025</p>
              <Button className="supple__button" type="default">
              <a href="#"> О программе</a>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div
            className="programs__term__card"
            style={{ background: "#F1F2F4" }}
            bordered={false}
          >
            <div className="div__term">
              <div className="term__consultation__class">
                <h3>Подача до</h3>
                <p>31.01.2025</p>
                <Button className="term__button" type="primary">
                  <a href="#">Консультация</a>
                </Button>
              </div>
              <div className="supple">
                <h3>Действует до</h3>
                <p>31.01.2025</p>
                <Button className="supple__button" type="default">
                  <a href="#"> О программе</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="programs__term__card"
            style={{ background: "#F1F2F4" }}
            bordered={false}
          >
            <div className="div__term">
              <div className="term__consultation__class">
                <h3>Подача до</h3>
                <p>31.01.2025</p>
                <Button className="term__button" type="primary">
                  <a href="#">Консультация</a>
                </Button>
              </div>
              <div className="supple">
                <h3>Действует до</h3>
                <p>31.01.2025</p>
                <Button className="supple__button" type="default">
                <a href="#"> О программе</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramBlock;

{
  /* <Row gutter={18} className="second_table_programs" style={{gap: "30px"}}>
                <Col span={7} style={{ display: "flex", flexDirection: "row" }}>
                    <div className="Card_programs_block" style={{width: "100%", background: "#F1F2F4",}} bordered={false} >
                        <h3>Подача до</h3>
                        <p>31.01.2025</p>
                        <Button type="primary">
                            Консультация
                        </Button>
                    </div>
                    <Card className="Card_programs_block" bordered={false}>
                        <h3>Действует до </h3>
                        <p>31.01.2025</p>
                        <Button>
                            О программе
                        </Button>
                    </Card>
                </Col>
                <Col span={8} style={{ display: "flex", flexDirection: 'row' }}>
                    <Card className="Card_programs_block" style={{width: "100%"}} bordered={false}>
                        <h3>Подача до</h3>
                        <p>31.01.2025</p>
                        <Button type="primary">
                            Консультация
                        </Button>
                    </Card>
                    <Card className="Card_programs_block" bordered={false}>
                        <h3>Действует до </h3>
                        <p>31.01.2025</p>
                        <Button>
                            О программе
                        </Button>
                    </Card>
                </Col>
                <Col span={7} style={{ display: "flex", flexDirection: "row" }}>
                    <Card className="Card_programs_block" style={{width: "100%"}} bordered={false}>
                        <h3>Подача до</h3>
                        <p>31.01.2025</p>
                        <Button type="primary">
                           Консультация
                        </Button>
                    </Card>
                    <Card className="Card_programs_block" bordered={false}>
                        <h3>Действует до </h3>
                        <p>31.01.2025</p>
                        <Button>
                           О программе
                        </Button>
                    </Card>
                </Col>
            </Row> */
}
