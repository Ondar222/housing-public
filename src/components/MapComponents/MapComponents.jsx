import React from "react";
import { EnvironmentOutlined, MobileOutlined, MailOutlined } from "@ant-design/icons";


const MapComponents = () => {
    return ( 
         <div className="Container_contactsBlock_second">
    <div className="ContactsBlock_second_block">
        <div className="Location_class">
            <EnvironmentOutlined classID="Location_logo" style={{ justifyContent: "center", color: "#2091F9" }} />
            <p className="Location_class_paragraph" > Республика Тыва, Кызыл, ул. Бухтуева 3</p>
        </div>

        <div className="Phone_class">
            <MobileOutlined className="Phone_logo" />
            <p className="Phone_class_paragraph">(843) 555-0130</p>
        </div>
        <div className="Email_class">
            <MailOutlined className="Email_class_logo" />
            <p className="Email_class_paragraph">default@mail.ru</p>
        </div>
    </div>
    <iframe className="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad153a0ca85b2bf7d06720a69f8a45f52f5619b51eb74a3720804d8a2c50ff3b6&amp;source=constructor" width="100%" height="400"></iframe>
</div> );
}
 
export default MapComponents;