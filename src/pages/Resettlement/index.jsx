// import React from "react";

// const ResetettlementPage = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         width: "100%",
//         marginTop: "20px",
//         justifyContent: "center",
//       }}
//     >
//       <p style={{fontSize: "20px"}}>
//       Интерактивная карта аварийного жилья в стадии разработке
//       </p>
//     </div>
//   );
// };

// export default ResetettlementPage;

import React from 'react';
import { Map, Marker } from 'react-map-gl';
import 'antd/dist/reset.css';
import { Table } from 'antd';

const { Column } = Table;

// Пример данных для таблицы
const data = [
  {
    key: '1',
    region: 'Казань',
    address: 'г. Казань, ул. Груздева, д. 1',
    year: 1975,
    coordinates: [49.1064, 55.7498] // пример координат
  },
  // Добавьте остальные адреса с таблицы аналогично
];

const InteractiveMap = () => {
  return (
    <div>
      <Map
        initialViewState={{
          longitude: 49.1064,
          latitude: 55.7498,
          zoom: 10
        }}
        style={{ width: '100%', height: 500 }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken="Ваш_токен_доступа_к_Mapbox"
      >
        {data.map((item) => (
          <Marker longitude={item.coordinates[0]} latitude={item.coordinates[1]} key={item.key}>
            <div style={{color: 'red'}}>📍</div>
          </Marker>
        ))}
      </Map>

      <Table dataSource={data} pagination={false}>
        <Column title="Регион" dataIndex="region" key="region" />
        <Column title="Адрес" dataIndex="address" key="address" />
        <Column title="Год" dataIndex="year" key="year" />
      </Table>
    </div>
  );
};

export default InteractiveMap;


