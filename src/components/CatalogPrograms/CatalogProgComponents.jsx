import React from 'react';
import { Button, Card, Col, Row } from 'antd';



const CatalogProgComponents = () => (
    <Row className='block_catalogs_programs' justify={"space-between"} gutter={[40, 40]}>
        <Col span={6}>
            <Card className='second_card_cardprog' bordered={true}>
                <div>
                    <h3 className='second_card_cardprog_heading_prog'>1 программа</h3>
                    <p>краткая характеристика</p>
                </div>
                <div>
                    <h3 className='second_card_cardprog_heading'>тестовый текст</h3>
                    <p className='second_card_cardprog_paragraph'>тестовый текст</p>
                </div>
                <div className='conditions'>
                    <p>условия</p>
                    <p>условия</p>
                    <p>условия</p>
                    <p>условия</p>
                    <p>условия</p>
                </div>
                <Button className='button_catalog_programs' type='primary'>
                    Подать заявку
                </Button>
            </Card>
        </Col>
        <Col span={6}>
            <Card className='second_card_cardprog' bordered={true}>
                <div>
                    <h3 className='second_card_cardprog_heading_prog'>2 программа</h3>
                    <p>краткая характеристика</p>
                </div>
                <div>
                    <h3 className='second_card_cardprog_heading'>тестовый текст</h3>
                    <p className='second_card_cardprog_paragraph'>тестовый текст</p>
                </div>
                <div className='conditions'>
                    <p>условия</p>
                    <p>условия</p>
                    <p>условия</p>
                    <p>условия</p>
                    <p>условия</p>
                </div>
                <Button className='button_catalog_programs' type='primary'>
                    Подать заявку
                </Button>
            </Card>
        </Col>
        <Col span={6}>
            <Card className='second_card_cardprog' bordered={true}>
                <div>
                    <h3 className='second_card_cardprog_heading_prog'>3 программа</h3>
                    <p>краткая характеристика</p>
                </div>
                <div>
                    <h3 className='second_card_cardprog_heading'>тестовый текст</h3>
                    <p className='second_card_cardprog_paragraph'>тестовый текст</p>
                </div>
                <div className='conditions'>
                    <p>условия</p>
                    <p>условия</p>
                    <p>условия</p>
                    <p>условия</p>
                    <p>условия</p>
                </div>
                <Button className='button_catalog_programs' type='primary'>
                    Подать заявку
                </Button>
            </Card>
        </Col>
    </Row>
);
export default CatalogProgComponents;