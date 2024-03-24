import React from "react";
import { Button, Card } from "antd";

const gridStyle = {
  width: "25%",
  height: "150px",
  textAlign: "center",
};

const AddInformationBlock = () => (
  <div>
    <div className="container_addInfo">
      <div className="titleBlock_addInfo">
        <h1>
          Дополнительная информация
        </h1>
        <p>
          Ссылки на сайты и электронные системы связанные с жилищными
          программами
        </p>
      </div>

      <div className="addBlocks" >
        <Card>
          <Card.Grid style={gridStyle}>Client Name</Card.Grid>
          <Card.Grid style={gridStyle}>Client Name</Card.Grid>
          <Card.Grid style={gridStyle}>Client Name</Card.Grid>
          <Card.Grid style={gridStyle}>Client Name</Card.Grid>
          <Card.Grid style={gridStyle}>Client Name</Card.Grid>
          <Card.Grid style={gridStyle}>Client Name</Card.Grid>
          <Card.Grid style={gridStyle}>Client Name</Card.Grid>
          <Card.Grid style={gridStyle}>Client Name</Card.Grid>
        </Card>
      </div>
      <Button className="button_Vk"
        type="primary"
      >
        Сообщество Вк
      </Button>
    </div>
  </div>
);
export default AddInformationBlock;
