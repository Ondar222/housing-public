import { Button } from "antd";
import React from "react";
import TurnBlock from "../../components/TurnComponent/TurnBlock";
import Snils from "../../components/SnilsComponent/Snils";
import AddInformationBlock from "../../components/AddInformation/AddInformationBlock";

const TurnPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: "column", gap: "20px", height: "100%" }}>
            <TurnBlock />
            <Snils />
            <AddInformationBlock />
        </div>


    )
}

export default TurnPage;