import React from "react";
import { Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const ProgramBlock = () => {
  return (
    <div className="container_programs">
      <Col span={6}
              xs={{
                span: 6
              }}
              sm={{
                span: 10
              }}
              md={{
                span: 24
              }} className="first_block_programs">
        <h1 className="title_programs">Жилищные программы</h1>
        <p className="paragraph_programs">
          Мэрией города Кызыл реализуются следующие жилищные государственные
          программы:
        </p>
      </Col>


      <div className="second_block_programs">
        <div>
          <Card className="Card_programs_block" bordered={true}>
            <h3>Обеспечение жильем молодых семьей</h3>
            <p>
              Государственная поддержка молодых семьей в России не подразумевает
              бесплатного предоставления жилья. Государство оплачивает часть
              стоимости квартиры за семью, а средства предоставляются в виде
              субсидии (то есть деньги государству возвращать не придется).
            </p>
            <p>
              <b>Участники:</b> Претендовать на субсидию в рамках программы
              «Молодая семья» могут супруги, которые одновременно соответствуют
              определенным законом критериям. Под них подпадают:
              <ul>
                <li>
                  супруги с российским гражданством в возрасте исключительно до
                  35 лет с наличием или отсутствием детей;
                </li>
                <li>
                  молодые семьи с наличием одного и более детей, даже если один
                  из супругов не имеет российского гражданства;
                </li>
                <li>
                  {" "}
                  родители-одиночки в возрасте до 35 лет с наличием одного
                  ребенка.
                </li>
              </ul>
            </p>
          </Card>
          <Card className="Card_programs_block" bordered={true}>
            <h3>Переселение из аварийного и ветхого жилья</h3>
            <p>
              Расселение аварийного жилья осуществляется в рамках федерального
              проекта «Обеспечение устойчивого сокращения непригодного для
              проживания жилищного фонда» национального проекта «Жилье и
              городская среда».
              <br />
              Всего по федпроекту необходимо расселить 9,97 млн. кв. м.
              аварийного жилья, улучшить жилищные условия 560,83 тыс. граждан.
            </p>
            <p>
              <b>Участники:</b> В программе могут принять участие владельцы
              помещений (в том числе квартиры, комнаты), представляющих
              опасность для жизни и здоровья жильцов:
              <ul>
                <li>собственники квартир или комнат;</li>
                <li>наниматели жилья по договору социального найма.</li>
              </ul>
            </p>
          </Card>
          <Card className="Card_programs_block" bordered={true}>
            <h3>Улучшение жилищных условий</h3>
            <p>
              Как получить квартиру в соцнаем или по договору безвозмездного
              пользования. Кому предоставляются жилищные субсидии и социальная
              ипотека. Как получить квартиру инвалидам и семьям с больными
              тяжелыми хроническими заболеваниями
            </p>
          </Card>
        </div>

      <Col span={6}
              xs={{
                span: 6
              }}
              sm={{
                span: 10
              }}
              md={{
                span: 24
              }} className="programs__container__bottom">
        <Card className="programs_block__bottom" >
          <Row justify={"space-between"} gutter={[16, 16]}>
            <Col span={12}>
              <div className="term__consultation__class">
                <p style={{ fontWeight: "bold" }}>Подача до</p>
                <p>31.01.2025</p>
                <Button className="term__button" type="primary">
                  <Link to="tel:+7 (39422) 3-27-90">Консультация</Link>
                </Button>
              </div>
            </Col>
            <Col span={12}>
              <div className="supple">
                <p style={{ fontWeight: "bold" }}>Действует до</p>
                <p>31.01.2025</p>
                <Button className="supple__button" type="default">
                  <Link to="/programs"> О программе</Link>
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
        <Card className="programs_block__bottom">
          <Row justify={"space-between"} gutter={[16, 16]}>
            <Col span={12}>
              <div className="term__consultation__class">
                <p style={{ fontWeight: "bold" }}>Подача до</p>
                <p>31.01.2025</p>
                <Button className="term__button" type="primary">
                  <Link to="tel:+7 (39422) 3-27-90">Консультация</Link>
                </Button>
              </div>
            </Col>
            <Col span={12}>
              <div className="supple">
                <p style={{ fontWeight: "bold" }}>Действует до</p>
                <p>31.01.2025</p>
                <Button className="supple__button" type="default">
                  <Link to="/programs"> О программе</Link>
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
        <Card className="programs_block__bottom">
          <Row justify={"space-between"} gutter={[16, 16]}>
            <Col span={12}>
              <div className="term__consultation__class">
                <p style={{ fontWeight: "bold" }}>Подача до</p>
                <p>31.01.2025</p>
                <Button className="term__button" type="primary">
                  <Link to="tel:+7 (39422) 3-27-90">Консультация</Link>
                </Button>
              </div>
            </Col>
            <Col span={12}>
              <div className="supple">
                <p style={{ fontWeight: "bold" }}>Действует до</p>
                <p>31.01.2025</p>
                <Button className="supple__button" type="default">
                  <Link to="/programs"> О программе</Link>
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
      </div>
    </div>
  );
};

export default ProgramBlock;
