import React from "react";
import { Map, Marker, NavigationControl } from "react-map-gl";
import "antd/dist/reset.css";
import { Table } from "antd";
import { Link } from "react-router-dom";

const { Column } = Table;

// Пример данных для таблицы
const data = [
  {
    key: "1",
    region: "Кызыл",
    address: "г. Кызыл, ул. Горная, д. 27",
    year: 1957,
    coordinates: [51.707864, 94.409981], // пример координат
    name: "Министерство науки и высшего образования Российской Федерации ФГБОУ ВО «Тувинский государственный университет» НАУЧНО-ИСПЫТАТЕЛЬНАЯ ЛАБОРАТОРИЯ научно-производственного центра «Силикат»",
    number: "б/н",
 
  },
  {
    key: "2",
    region: "Кызыл",
    address: "г. Кызыл, ул. Дружбы, д. 3/4",
    year: 2013,
    coordinates: [51.711743, 94.491871], // пример координат
    name: "Индивидуальный предприниматель ИП Натпит-оол А.А. Ассоциация «СФЕРА изыскателей» (СРО-И-048-25122019)",
    number: "б/н",
  },
  {
    key: "3",
    region: "Кызыл",
    address: "г. Кызыл, ул. Кочетова, д. 30а",
    year: 1924,
    coordinates: [51.720687, 94.446408], // пример координат
    name: "Индивидуальный предприниматель Кара-Сал Эдуард Борисович, Ассоциация проектировщиков 'Национальное Проектное объединение' ",
    number: "б/н",
  },
  {
    key: "4",
    region: "Кызыл",
    address: "г. Кызыл, ул. Крюкова, д. 71",
    year: 1976,
    coordinates: [51.713093, 94.477301], // пример координат
    name: "Министерство науки и высшего образования Российской Федерации ФГБОУ ВО «Тувинский государственный университет» НАУЧНО-ИСПЫТАТЕЛЬНАЯ ЛАБОРАТОРИЯ научно-производственного центра «Силикат»",
    number: "б/н",
  },
  {
    key: "5",
    region: "Кызыл",
    address: "г. Кызыл, ул. Паромная, д. 3",
    year: 1960,
    coordinates: [51.725257, 94.419081], // пример координат
    name: "Индивидуальный предприниматель Кара-Сал Эдуард Борисович, Ассоциация проектировщиков 'Национальное проектное объединение' ",
    number: "б/н",
  },
  {
    key: "6",
    region: "Кызыл",
    address: "г. Кызыл, ул. Полевая, д. 60",
    year: 1960,
    coordinates: [51.710074, 94.479861], // пример координат
    name: "Индивидуальный предприниматель Кара-Сал Эдуард Борисович Ассоциация организаций, выполняющих инженерные изыскания «ИНЖГЕОСТРОЙ»",
    number: "б/н",
  },
  {
    key: "7",
    region: "Кызыл",
    address: "г. Кызыл, ул. Рабочая, д. 77",
    year: 1946,
    coordinates: [51.716246, 94.459245], // пример координат
    name: "Индивидуальный предприниматель Кара-Сал Эдуард Борисович Ассоциация организаций, выполняющих инженерные изыскания «ИНЖГЕОСТРОЙ»",
    number: "б/н",
  },
  {
    key: "8",
    region: "Кызыл",
    address: "г. Кызыл, ул. Ровенская, д. 19",
    year: 1957,
    coordinates: [51.701016, 94.382888], // пример координат
    name: "СРО 'Национальное проектное объединение' Центр по проектированию и обследованию зданий и сооружений 'Силикат' ИП Кара-Сал Э.Б.",
    number: "б/н",
  },
  {
    key: "9",
    region: "Кызыл",
    address: "г. Кызыл, пер. Совхозный, д. 6",
    year: 1960,
    coordinates: [51.715671, 94.454456], // пример координат
    name: "Индивидуальный предприниматель Кара-Сал Эдуард Борисович Ассоциация организаций, выполняющих инженерные изыскания «ИНЖГЕОСТРОЙ»",
    number: "б/н",
  },
  {
    key: "10",
    region: "Кызыл",
    address: "г. Кызыл, ул. Станционная, д. 4, стр. А",
    year: 1967,
    coordinates: [49.1064, 55.7498], // пример координат
    name: "Индивидуальный предприниматель Кара-Сал Эдуард Борисович Саморегулирующая организация проектировщиков (СРО) «НАЦИОНАЛЬНОЕ ПРОЕКТНОЕ ОБЪЕДИНЕНИЕ» (НПО)",
    number: "б/н",
  },
  {
    key: "11",
    region: "Кызыл",
    address: "г. Кызыл, пер. Трактовый, д. 6",
    year: 1962,
    coordinates: [51.698621, 94.378702], // пример координат
    name: "Министерство науки и высшего образования Российской Федерации ФГБОУ ВО «Тувинский государственный университет» НАУЧНО-ИСПЫТАТЕЛЬНАЯ ЛАБОРАТОРИЯ научно-производственного центра «Силикат»",
    number: "б/н",
  },
  {
    key: "12",
    region: "Кызыл",
    address: "г. Кызыл, пер. Трактовый, д. 8",
    year: 1962,
    coordinates: [51.698509, 94.37827], // пример координат
    name: "Министерство науки и высшего образования Российской Федерации ФГБОУ ВО «Тувинский государственный университет» НАУЧНО-ИСПЫТАТЕЛЬНАЯ ЛАБОРАТОРИЯ научно-производственного центра «Силикат»",
    number: "б/н",
  },
  {
    key: "13",
    region: "Кызыл",
    address: "г. Кызыл, ул. Шевченко, д. 54",
    year: 1959,
    coordinates: [51.710744, 94.480858], // пример координат
    name: "Индивидуальный предприниматель Кара-Сал Эдуард Борисович Саморегулирующая организация проектировщиков (СРО) «НАЦИОНАЛЬНОЕ ПРОЕКТНОЕ ОБЪЕДИНЕНИЕ» (НПО)",
    number: "б/н",
  },
  {
    key: "14",
    region: "Кызыл",
    address: "г. Кызыл, ул. Эрзинская, д. 31",
    year: 1979,
    coordinates: [51.69411, 94.485619], // пример координат
    name: "Министерство науки и высшего образования Российской Федерации ФГБОУ ВО «Тувинский государственный университет» НАУЧНО-ИСПЫТАТЕЛЬНАЯ ЛАБОРАТОРИЯ научно-производственного центра «Силикат»",
    number: "б/н",
  },

  // Добавьте остальные адреса с таблицы аналогично
];

const InteractiveMap = () => {
  return (
    <div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa0461b19f7cbda03ab680f4fb6f08d49c1f337cfb62aa6dfaa7876086af3a5b4&amp;source=constructor"
        width="100%"
        height="368"
        frameborder="0"
      ></iframe>

      <Table dataSource={data} pagination={false}>
        <Column title="Регион" dataIndex="region" key="region" />
        <Column title="Адрес" dataIndex="address" key="address" />
        <Column title="Год" dataIndex="year" key="year" />
        <Table title={"Заключение специализированной организации, проводившей обследование многоквартирного дома"} dataSource={data} pagination={false}>
        <Column
          title="наименование специализированной организации"
          dataIndex="name"
          key="name"
        />
          <Column
          title="номер"
          dataIndex="number"
          key="number"
        />
        </Table>
      </Table>
      <Link to='/./excelDoc/AvarDoc.xlsx' target="_blank">Загрузить файл</Link>
    </div>
  );
};

export default InteractiveMap;
