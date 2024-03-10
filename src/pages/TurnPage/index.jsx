import { Button } from "antd";
import React from "react";
import { Card, Col, Row } from 'antd';
import TurnBlock from "../../components/TurnComponent/TurnBlock";
import Snils from "../../components/SnilsComponent/Snils";
import AddInformationBlock from "../../components/AddInformation/AddInformationBlock";

const TurnPage = () => {
    return (
        <div style={{height: "100%"}}>
            <TurnBlock />
            <div style={{marginTop: "20px", marginBottom: "20px"}}>
                <Snils />
            </div>
            <AddInformationBlock />
        </div>


    )
}

export default TurnPage;