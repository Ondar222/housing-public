import React from "react";
import { Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

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
        {
          [0, 1, 3].map((item) => {
            return (
              <div>
                <Card className="Card_programs_block" bordered={true}>
                  <h3>Обеспечение жильем молодых семьей</h3>
                  <p>
                    Государственная поддержка молодых семьей в России не подразумевает
                    бесплатного предоставления жилья. Государство оплачивает часть
                    стоимости квартиры за семью, а средства предоставляются в виде
                    субсидии (то есть деньги государству возвращать не придется).
                  </p>
                </Card>
                <br></br>
                <Card className="Card_programs_block">
                  <Row justify={"space-between"} gutter={[16,16]}>
                    <Col span={12}>
                      <div className="term__consultation__class">
                        <p style={{ fontWeight: "bold" }}>Подача до</p>
                        <p>31.01.2025</p>
                        <Button className="term__button" type="primary">
                          <Link to="#">Консультация</Link>
                        </Button>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="supple">
                        <p style={{ fontWeight: "bold" }}>Действует до</p>
                        <p>31.01.2025</p>
                        <Button className="supple__button" type="default">
                          <Link to="#"> О программе</Link>
                        </Button>
                      </div>
                    </Col>
                  </Row>


                </Card>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default ProgramBlock;