import React, { useState } from "react";
import { Button, Card } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const tabListNoTitle = [
  {
    key: "tab1",
    label: "Описание",
  },
  {
    key: "tab2",
    label: "Требования к участникам",
  },
  {
    key: "tab3",
    label: "Требования к недвижимости",
  },
];
const contentListNoTitle = {
  tab1: (
    <div>
      <p style={{ fontSize: "20px" }}>
        Программа позволяет работникам отрасли информационных технологий
        оформить ипотеку по ставке до 5% годовых.{" "}
      </p>
      <ul>
        <li style={{ fontSize: "20px" }}>
          Минимальный размер первоначального взноса — 20% от стоимости жилья.
        </li>
        <li style={{ fontSize: "20px" }}>
          {" "}
          Для оплаты первоначального взноса можно использовать средства
          материнского капитала..
        </li>
      </ul>
      <p style={{ fontSize: "20px" }}>
      Максимальная сумма кредита на льготных условиях – 18 млн для регионов с
      населением больше 1 млн человек, 9 млн рублей для регионов с населением 1
      млн и меньше человек. При этом в рамках региональной программы или на
      рыночных условиях можно получить и большую сумму. До 15 и 30 млн рублей
      соответственно
      </p>
      <p style={{ fontSize: "20px" }}>
        {" "}
        Подробные условия программы «Льготная ипотека для ИТ-специалистов».
      </p>
    </div>
  ),

  tab2: (
    <div>
      <p style={{ fontSize: "20px" }}>
        Вы можете принять участие в программе, если соответствуете следующим
        требованиям:
      </p>
      <ul>
        <li style={{ fontSize: "20px" }}>наличие гражданства РФ;</li>
        <li style={{ fontSize: "20px" }}>
          трудоустройство в компании, работающей в сфере информационных
          технологий, имеющей аккредитацию Минцифры России
        </li>
        <li style={{fontSize: "20px"}}>возраст от 18 до 50 лет включительно. </li>
      </ul>
      <p style={{ fontSize: "20px" }}>
        Для специалистов в возрасте от 36 до 50 лет необходим стаж в
        аккредитованной компании от 3 месяцев и доход на уровне:
      </p>
      <ul>
        <li style={{ fontSize: "20px" }}>
          от 150 тыс. рублей (до вычета налогов) в Кызыле
        </li>
        <li style={{ fontSize: "20px" }}>
          от 120 тыс. рублей (до вычета налогов) в городах с населением более 1
          млн. человек
        </li>
        <li style={{ fontSize: "20px" }}>
          от 70 тыс. рублей для городов с населением менее 1 млн человек
        </li>
      </ul>
      <p style={{ fontSize: "20px" }}>
        Уровень дохода сотрудника ИТ-компании в возрасте от 36 до 50 лет зависит
        также от места его работы. Это может быть как адрес основного офиса
        компании, так и адрес её филиала? или структурного подразделения в
        другом городе.
      </p>
    </div>
  ),

  tab3: (
    <div>
      <p style={{ fontSize: "20px" }}>
        По программе возможно приобретение жилья на первичном рынке
        недвижимости, относящееся к одной из следующих категорий:
      </p>
      <ul>
        <li style={{ fontSize: "20px" }}>
          Квартиры в строящихся домах по договорам долевого участия (ДДУ);
        </li>
        <li style={{ fontSize: "20px" }}>Готовые квартиры от застройщиков по договору купли-продажи;</li>
        <li style={{ fontSize: "20px" }}>
          Строящиеся индивидуальные жилые дома в границах малоэтажных жилых
          комплексов от застройщика по ДДУ;
        </li>
        <li style={{ fontSize: "20px" }}>
          Готовые дома от застройщиков-первых собственников по договору
          купли-продажи;
        </li>
        <li style={{ fontSize: "20px" }}>
          Строительство индивидуального жилого дома по договору подряда;
        </li>
        <li style={{ fontSize: "20px" }}>
          Покупка земельного участка с дальнейшим строительством индивидуального
          дома по договору подряда.
        </li>
      </ul>
    </div>
  ),
};
const DescriptionProgramsBlock = () => {
  const [activeTabKey2, setActiveTabKey2] = useState("tab1");
  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };
  return (
    <>
      <br />
      <br />
      <Card
        className="description__card__info"
        style={{
          width: "100%",
        }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        tabBarExtraContent={
          <Button
            className="btn__description"
            type="primary"
            style={{ background: "#1677ff" }}
          >
            <Link to="/"> Подать заявку</Link>
            <Link to="/">
              <RightOutlined />
            </Link>
          </Button>
        }
        onTabChange={onTab2Change}
        tabProps={{
          size: "middle",
        }}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </>
  );
};
export default DescriptionProgramsBlock;
