import React from "react";
import { Card } from "antd";

const ActionBlock = () => (
  <div className="container_action">
    {
      [0, 1, 2, 3].map((item) => {
        return (
          <Card type="inner">
            <div className="step_class">
              <h4>Шаг 1.</h4>
              <h4> Выполнить действие</h4>
            </div>
          </Card>
        )
      })
    }
  </div>
);
export default ActionBlock;
