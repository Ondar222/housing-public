import React from 'react';
import { Button, Card } from 'antd';


const gridStyle = {
    width: '25%',
    height: '150px',
    textAlign: 'center',
};

const AddInformationBlock = () => (
    <div>
        <div style={{ margin: "0 auto", display: "flex", flexDirection: "column", justifyContent: 'center' }}>
            <div style={{ textAlign: "center", width: "762px", height: "222px", justifyContent: "center", display: "flex", flexDirection: 'column', margin: "0 auto" }}>
                <h1 style={{ fontSize: "48px" }}>Дополнительная информация</h1>
                <p style={{ fontSize: '34px' }}>Ссылки на сайты и электронные системы связанные
                    с жилищными программами</p>
            </div>

            <div style={{ marginTop: "60px", marginBottom: "60px", margin: "0 auto" }}>

                <Card>
                    <Card.Grid style={gridStyle}>Client Name</Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle}>
                        Client Name
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>Client Name</Card.Grid>
                    <Card.Grid style={gridStyle}>Client Name</Card.Grid>
                    <Card.Grid style={gridStyle}>Client Name</Card.Grid>
                    <Card.Grid style={gridStyle}>Client Name</Card.Grid>
                    <Card.Grid style={gridStyle}>Client Name</Card.Grid>
                    <Card.Grid style={gridStyle}>Client Name</Card.Grid>
                </Card>
            </div>
            <Button
                style={{
                    width: "236px",
                    height: "60px",
                    textAlign: "center",
                    margin: "0 auto",
                    borderRadius: "30px",
                    marginTop: "40px",
                    marginBottom: "40px"
                }}
                type='primary'>
                Сообщество Вк
            </Button>
        </div>

    </div>
);
export default AddInformationBlock;