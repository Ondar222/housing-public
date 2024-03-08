import React from "react";
import { Button, Flex } from 'antd';
import Link from "antd/es/typography/Link";

const NavBars = () => {
    return (
        //отдельно
        <div style={{ display: "flex", justifyContent: "space-between", width: "80%", margin: "0 auto", alignItems: "center", padding: "20px 20px", borderBottom: "1px solid #D9D9D9" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                <img src="./public/img/merya-logo.svg" width={31} height={31}></img>
                <h1 style={{ fontSize: "15px", color: "#404040" }}>
                    ИС Жилищных программ
                </h1>
            </div>

            <div className="menu" style={{ display: "flex", gap: "21px" }}>
                <li className="menuList" style={{ color: "#404040", listStyle: "none", cursor: "pointer", position: "relative", fontWeight: "bold" }}>
                    <Link href="/">Главная</Link>
                </li>
                <li className="menuList" style={{ color: "#404040", listStyle: "none", cursor: "pointer", position: "relative" }}>
                    <Link href="/turn">Моя очередь</Link>
                </li>
                <li className="menuList" style={{ color: "#404040", listStyle: "none", cursor: "pointer", position: "relative" }}>
                    <Link href="/programs">Программы</Link>
                </li>
                <li className="menuList" style={{ color: "#404040", listStyle: "none", cursor: "pointer", position: "relative" }}>
                    <Link href="/">Переселение</Link></li>
                <li className="menuList" style={{ color: "#404040", listStyle: "none", cursor: "pointer", position: "relative" }}> <Link href="/">Контакты</Link></li>
            </div>

            <Flex gap="small" wrap="wrap" style={{ width: "194px", height: "42px" }}>
                <Button style={{ width: "100%", height: "100%" }} type="primary">Вход</Button>
            </Flex>
        </div>

    )
}

export default NavBars;