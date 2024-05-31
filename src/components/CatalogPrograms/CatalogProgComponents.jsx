import React, { useEffect } from "react";
import { Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const CatalogProgComponents = () => {
  useEffect(() => {
    document.querySelectorAll('.second_card_cardprog').forEach(element => {
      element.addEventListener('mouseover', () => {
        document.querySelectorAll('.second_card_cardprog').forEach(el => {
          if (el !== element) {
            el.classList.add('shrink');
          }
        });
      });

      element.addEventListener('mouseout', () => {
        document.querySelectorAll('.second_card_cardprog').forEach(el => {
          el.classList.remove('shrink');
        });
      });
    });
  }, [])
  return (
    < Row justify={"space-between"} gutter={[16, 16]} >
      {
        [0, 1, 2, 3].map((item) => {
          return (
            <Col
              span={6}
              xs={{
                span: 24
              }}
              sm={{
                span: 10
              }}
              md={{
                span: 6
              }}

              className="second_card_cardprog"
            >
              <Card bordered={true}>
                <div>
                  <h3 className="second_card_cardprog_heading_prog">1 программа</h3>
                  <p>краткая характеристика</p>
                </div>
                <div>
                  <h3 className="second_card_cardprog_heading">тестовый текст</h3>
                  <p className="second_card_cardprog_paragraph">тестовый текст</p>
                </div>
                <div className="conditions">
                  <p>условия</p>
                  <p>условия</p>
                  <p>условия</p>
                  <p>условия</p>
                  <p>условия</p>
                </div>
                <Button type="primary">
                  <Link to="/"> Подать заявку</Link>
                </Button>
              </Card>
            </Col>
          )
        })
      }
    </Row >
  )
};
export default CatalogProgComponents;
