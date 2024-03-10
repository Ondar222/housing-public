import React from 'react';
import { Card } from 'antd';
// import InputMenuBlock from '../InputMenu/InputMenuBlock';


const ActionBlock = () => (
  
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "20px", marginTop: "20px" }}>
   {/* <InputMenuBlock /> */}
        <Card type="inner"
        //  extra={<a href="#">More</a>}
        >
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>

                <h1>Шаг 1.</h1>
                <h1> Выполнить действие</h1>
            </div>
        </Card>
        <Card
            style={{
                marginTop: 16,
            }}
            type="inner"

        //   extra={<a href="#">More</a>}
        >
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>

                <h1>Шаг 2.</h1>
                <h1> Выполнить действие</h1>
            </div>
        </Card>
        <Card type="inner"
        //  extra={<a href="#">More</a>}
        >
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>

                <h1>Шаг 3.</h1>
                <h1> Выполнить действие</h1>
            </div>
        </Card>
        <Card
            style={{
                marginTop: 16,
            }}
            type="inner"

        //   extra={<a href="#">More</a>}
        >
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>

                <h1>Шаг 4.</h1>
                <h1> Выполнить действие</h1>
            </div>
        </Card>
    </div>

);
export default ActionBlock;