import React from "react";
import { Card } from "antd";

const ActionBlock = () => (
  <div className="container_action">
    <Card type="inner">
      <div className="step_class">
        <h1>Шаг 1.</h1>
        <h1> Выполнить действие</h1>
      </div>
    </Card>
    <Card
      style={{
        marginTop: 16,
      }}
      type="inner"
    >
      <div className="step_class">
        <h1>Шаг 2.</h1>
        <h1> Выполнить действие</h1>
      </div>
    </Card>
    <Card type="inner">
      <div className="step_class">
        <h1>Шаг 3.</h1>
        <h1> Выполнить действие</h1>
      </div>
    </Card>
    <Card
      style={{
        marginTop: 16,
      }}
      type="inner"
    >
      <div className="step_class">
        <h1>Шаг 4.</h1>
        <h1> Выполнить действие</h1>
      </div>
    </Card>
  </div>
);
export default ActionBlock;
